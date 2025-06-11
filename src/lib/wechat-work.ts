import { QueryClient } from '@tanstack/react-query'
import { serverOnly } from '@tanstack/react-start'

// 企业微信用户信息类型定义
export type WechatWorkUserInfo = {
	userid?: string
	name?: string
	email?: string
	avatar?: string
	department?: number[]
	gender?: string
	grade?: string
	errcode?: number
	errmsg?: string
}

// 企业微信 token 缓存类型
type EnterpriseTokenCache = {
	token: string
	expiresAt: number
}

// 创建服务端 QueryClient 实例
const serverQueryClient = new QueryClient({
	defaultOptions: {
		queries: {
			// 默认配置
			staleTime: 1000 * 60, // 1分钟
			gcTime: 1000 * 60 * 5, // 5分钟
			retry: 1,
		},
	},
})

/**
 * 获取企业微信访问令牌
 * 使用企业ID和应用密钥获取企业微信API的access_token
 */
export const getEnterpriseToken = serverOnly(async (): Promise<string> => {
	const corpId = process.env.WECHAT_WORK_CORP_ID
	const corpSecret = process.env.WECHAT_WORK_CORP_SECRET

	if (!corpId || !corpSecret) {
		throw new Error(
			'企业微信配置缺失：需要WECHAT_WORK_CORP_ID和WECHAT_WORK_CORP_SECRET环境变量',
		)
	}

	// 获取新的token
	const url = `https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=${corpId}&corpsecret=${corpSecret}`
	const response = await fetch(url)
	const data = (await response.json()) as {
		access_token: string
		expires_in: number
		errcode: number
		errmsg: string
	}

	if (data.errcode !== 0) {
		throw new Error(`企业微信token获取失败: ${data.errmsg} (${data.errcode})`)
	}

	return data.access_token
})
/**
 * 获取企业微信用户信息
 * 使用临时授权码获取用户基本信息
 */
export const getUserInfoByCode = serverOnly(
	async (code: string): Promise<WechatWorkUserInfo> => {
		const accessToken = await getEnterpriseTokenWithCache()

		try {
			// 获取用户ID
			const userIdUrl = `https://qyapi.weixin.qq.com/cgi-bin/auth/getuserinfo?access_token=${accessToken}&code=${code}`
			const userIdResponse = await fetch(userIdUrl)
			const userIdData = (await userIdResponse.json()) as {
				errcode: number
				errmsg: string
				userid?: string
			}

			if (userIdData.errcode !== 0 || !userIdData.userid) {
				throw new Error(
					`获取用户ID失败: ${userIdData.errmsg} (${userIdData.errcode})`,
				)
			}

			// 获取用户详细信息
			const userInfoUrl = `https://qyapi.weixin.qq.com/cgi-bin/user/get?access_token=${accessToken}&userid=${userIdData.userid}`
			const userResponse = await fetch(userInfoUrl)
			const userInfo = (await userResponse.json()) as WechatWorkUserInfo

			if (userInfo.errcode !== 0) {
				throw new Error(
					`获取用户信息失败: ${userInfo.errmsg} (${userInfo.errcode})`,
				)
			}

			// 获取部门信息
			if (userInfo.department?.length) {
				const departmentId = userInfo.department.at(-1)
				const departmentIdUrl = `https://qyapi.weixin.qq.com/cgi-bin/department/get?access_token=${accessToken}&id=${departmentId}`
				const departmentIdResponse = await fetch(departmentIdUrl)
				const departmentIdData = (await departmentIdResponse.json()) as {
					errcode: number
					errmsg: string
					department?: {
						id: number
						name: string
					}
				}

				if (departmentIdData.errcode === 0 && departmentIdData.department) {
					userInfo.grade = departmentIdData.department.name
				}
			}

			return userInfo
		} catch (error) {
			console.error('获取企业微信用户信息失败:', error)
			throw error
		}
	},
)

/**
 * 使用 Tanstack Query 缓存获取企业微信访问令牌
 * 缓存时间为5分钟，提前60秒过期以避免边界问题
 */
export async function getEnterpriseTokenWithCache(): Promise<string> {
	const cacheKey = ['wechat-work', 'enterprise-token']

	// 尝试从缓存获取
	const cachedData =
		serverQueryClient.getQueryData<EnterpriseTokenCache>(cacheKey)
	const now = Date.now()

	// 如果缓存有效，直接返回
	if (cachedData?.token && cachedData.expiresAt > now) {
		return cachedData.token
	}

	// 获取新token并缓存
	const token = await getEnterpriseToken()

	// 更新缓存，提前60秒过期以避免边界问题
	serverQueryClient.setQueryData(cacheKey, {
		token,
		expiresAt: now + (7200 - 60) * 1000, // 企业微信token默认有效期为7200秒
	})

	return token
}

/**
 * 使用 Tanstack Query 缓存获取企业微信用户信息
 * 使用临时授权码获取用户基本信息，并缓存结果
 */
export async function getUserInfoByCodeWithCache(
	code: string,
): Promise<WechatWorkUserInfo> {
	const cacheKey = ['wechat-work', 'user-info', code]

	// 尝试从缓存获取
	const cachedData =
		serverQueryClient.getQueryData<WechatWorkUserInfo>(cacheKey)
	if (cachedData) {
		return cachedData
	}

	// 获取新数据并缓存
	const userInfo = await getUserInfoByCode(code)

	return userInfo
}
