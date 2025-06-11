import { db as prisma } from '../src/lib/db'
import fs from 'node:fs'
import path from 'node:path'

// 1. 定义JSON模型
interface SysUser {
	id: number
	create_time: string
	modify_time: string
	account: string
	avatar: string | null
	birthday: string
	deptid: number
	email: string
	name: string
	password: string
	phone: string
	roleid: string
	salt: string
	sex: number
	status: number
	version: number | null
	city: string | null
	job: string | null
	motto: string | null
	serial_no: string | null
}
interface SysUserSerial {
	id: number
	serial_no: string
	user_name: string
	deptName: string
}
interface PersonalEssay {
	id: number
	create_time: string
	modify_by: number
	modify_time: string
	content: string
	title: string
	user_id: number
	status: number
	audit_time: string | null
}
interface PersonalEssayAudit {
	id: number
	create_by: number
	create_time: string
	modify_by: number
	modify_time: string
	essay_id: number
	audit_msg: string
	audit_status: number
	operator: string
}

type Role = 'USER' | 'ADMIN'
type EssayStatus = 'DRAFT' | 'PENDING_REVIEW' | 'PUBLISHED' | 'REJECTED'
type AuditStatus = 'PENDING' | 'APPROVED' | 'REJECTED'

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

async function processBatch<T>(
	items: T[],
	batchSize: number, // 保留参数但不再使用
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	fn: (item: T) => Promise<any>,
	delayMs = 100,
) {
	for (let i = 0; i < items.length; i++) {
		await fn(items[i])
		if ((i + 1) % 10 === 0 || i === items.length - 1) {
			await delay(delayMs)
			console.log(`已处理 ${i + 1}/${items.length} 条，等待${delayMs}ms...`)
		}
	}
}

async function main() {
	// 读取数据
	const base = path.join(__dirname, 'history')
	const users: SysUser[] = JSON.parse(
		fs.readFileSync(path.join(base, 't_sys_user_202505301656.json'), 'utf8'),
	).t_sys_user
	const userSerials: SysUserSerial[] = JSON.parse(
		fs.readFileSync(
			path.join(base, 't_sys_user_serial_202505301657.json'),
			'utf8',
		),
	).t_sys_user_serial
	const essays: PersonalEssay[] = JSON.parse(
		fs.readFileSync(
			path.join(base, 't_personal_essay_202505301657.json'),
			'utf8',
		),
	).t_personal_essay
	const essayAudits: PersonalEssayAudit[] = JSON.parse(
		fs.readFileSync(
			path.join(base, 't_personal_essay_audit_202505301657.json'),
			'utf8',
		),
	).t_personal_essay_audit

	// 建立序列号/年级映射
	const serialMap = new Map<string, string>()
	// biome-ignore lint/complexity/noForEach: <explanation>
	userSerials.forEach((s) => serialMap.set(s.serial_no, s.deptName))

	// 1. User
	const userIdMap = new Map<number, string>() // 旧ID->新ID
	await processBatch(users, 10, async (u) => {
		let grade: string | null = null
		for (const [serial, deptName] of serialMap.entries()) {
			if (u.name.includes(deptName)) {
				grade = deptName
				break
			}
		}
		// 角色
		const role: Role = u.roleid.includes('1') ? 'ADMIN' : 'USER'
		// 检查是否已存在
		let user = await prisma.user.findUnique({ where: { email: u.email } })
		if (!user) {
			user = await prisma.user.create({
				data: {
					id: u.id.toString(),
					name: u.name,
					email: u.email,
					emailVerified: true,
					image: u.avatar,
					gender: u.sex.toString(),
					department: u.deptid,
					grade,
					createdAt: new Date(u.create_time),
					updatedAt: new Date(u.modify_time),
					role,
				},
			})
		} else {
			user = await prisma.user.update({
				where: { id: user.id },
				data: {
					name: u.name,
					image: u.avatar,
					gender: u.sex.toString(),
					department: u.deptid,
					grade,
					updatedAt: new Date(u.modify_time),
					role,
				},
			})
		}
		userIdMap.set(u.id, user.id)
	})
	console.log('User导入完成')

	// 2. Account
	await processBatch(users, 10, async (u) => {
		const userId = userIdMap.get(u.id) || '1'
		const acc = {
			id: u.id.toString(),
			accountId: u.account,
			providerId: 'wechat-work',
			accessToken: null,
			createdAt: new Date(u.create_time),
			updatedAt: new Date(u.modify_time),
			userId,
		}
		const exist = await prisma.account.findUnique({ where: { id: acc.id } })
		if (!exist) {
			await prisma.account.create({ data: acc })
		} else {
			await prisma.account.update({ where: { id: acc.id }, data: acc })
		}
	})
	console.log('Account导入完成')

	// 3. Essay
	const essayIdMap = new Map<number, number>() // 旧ID->新ID
	await processBatch(essays, 10, async (e) => {
		const authorId = userIdMap.get(e.user_id) || '1'
		let status: EssayStatus = 'DRAFT'
		switch (e.status) {
			case 1:
				status = 'DRAFT'
				break
			case 2:
				status = 'PENDING_REVIEW'
				break
			case 3:
				status = 'PUBLISHED'
				break
			case 4:
				status = 'REJECTED'
				break
		}
		const essay = await prisma.essay.create({
			data: {
				title: e.title,
				content: e.content,
				authorId,
				status,
				createdAt: new Date(e.create_time),
				updatedAt: new Date(e.modify_time),
			},
		})
		essayIdMap.set(e.id, essay.id)
	})
	console.log('Essay导入完成')

	// 4. EssayAudit
	await processBatch(essayAudits, 10, async (a) => {
		const essayId = essayIdMap.get(a.essay_id)
		const operatorId = userIdMap.get(a.create_by)
		if (!essayId || !operatorId) return
		let auditStatus: AuditStatus = 'PENDING'
		switch (a.audit_status) {
			case 1:
				auditStatus = 'REJECTED'
				break
			case 2:
				auditStatus = 'PENDING'
				break
			case 3:
				auditStatus = 'APPROVED'
				break
		}
		await prisma.essayAudit.create({
			data: {
				essayId,
				auditStatus,
				auditMsg: a.audit_msg,
				operatorId,
				createdAt: new Date(a.create_time),
				updatedAt: new Date(a.modify_time),
			},
		})
	})
	console.log('EssayAudit导入完成')
}

main()
	.then(() => {
		console.log('全部导入完成')
		return prisma.$disconnect()
	})
	.catch((e) => {
		console.error(e)
		return prisma.$disconnect()
	})
