import { betterAuth } from 'better-auth'
import { prismaAdapter } from 'better-auth/adapters/prisma'
import { genericOAuth } from 'better-auth/plugins'
import { db } from '~/lib/db'
import { getEnterpriseToken, getUserInfoByCode } from '~/lib/wechat-work'

export const auth = betterAuth({
	database: prismaAdapter(db, {
		provider: 'sqlite',
	}),
	trustedOrigins: ['http://localhost:3000', 'http://127.0.0.1:3000'],
	socialProviders: {
		github: {
			clientId: process.env.GITHUB_CLIENT_ID as string,
			clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
		},
	},
	plugins: [
		genericOAuth({
			config: [
				{
					providerId: 'wechat-work',
					authorizationUrl:
						'https://login.work.weixin.qq.com/wwlogin/sso/login',
					tokenUrl: 'http://localhost:3000/api/wechat-work-code',
					clientId: process.env.WECHAT_WORK_CLIENT_ID as string,
					clientSecret: process.env.WECHAT_WORK_CLIENT_SECRET as string,
					authorizationUrlParams: {
						appid: process.env.WECHAT_WORK_CORP_ID as string,
						agentid: process.env.WECHAT_WORK_AGENT_ID as string,
						login_type: 'CorpApp',
					},

					getUserInfo: async (
						token,
					): Promise<{
						id: string
						email: string
						name: string
						image?: string | null
						emailVerified: boolean
						createdAt: Date
						updatedAt: Date
					}> => {
						// 从伪造的 token 中提取code

						console.info('Token:', token)

						try {
							// // 获取企业级 access_token
							// const accessToken = await getEnterpriseToken()

							// 使用 code 获取用户信息
							const userInfo = await getUserInfoByCode(
								token.accessToken as string,
								token.tokenType as string,
							)

							console.info('获取到的用户信息:', userInfo)

							return {
								id: userInfo.userid || '',
								email: userInfo.email || '',
								name: (userInfo.name || userInfo.userid) ?? '',
								image: userInfo.avatar || null,
								emailVerified: true,
								createdAt: new Date(),
								updatedAt: new Date(),
							}
						} catch (error) {
							console.error('获取企业微信用户信息失败:', error)
							throw new Error(
								`获取企业微信用户信息失败: ${error instanceof Error ? error.message : '未知错误'}`,
							)
						}
					},
				},
			],
		}),
	],
})
