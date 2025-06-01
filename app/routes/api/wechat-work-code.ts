import { json } from '@tanstack/react-start'
import { createAPIFileRoute } from '@tanstack/react-start/api'
import { getEnterpriseToken } from '~/lib/wechat-work'

export const APIRoute = createAPIFileRoute('/api/wechat-work-code')({
	POST: async ({ request }) => {
		try {
			// 从请求中提取必要的参数
			let code: string | null = null

			// 处理两种可能的请求格式：
			// 1. 表单数据 (来自better-auth)
			// 2. JSON数据 (来自其他客户端)
			const contentType = request.headers.get('content-type') || ''

			if (contentType.includes('application/json')) {
				const body = await request.json()
				code = body.code
			} else {
				const formData = await request.formData()
				code = formData.get('code') as string
			}

			if (!code) {
				return json(
					{
						error: 'invalid_request',
						error_description: '缺少code参数',
					},
					{ status: 400 },
				)
			}
			const accessToken = await getEnterpriseToken()

			// 用 token 里的 token_type 替换 code
			// 因为 better-auth 只支持标准的 token
			return json({
				access_token: accessToken,
				token_type: code,
				expires_in: 7200,
			})
		} catch (error) {
			console.error('企业微信token端点错误:', error)

			// 确定错误类型和状态码
			const status = 500
			let errorMessage = '服务器内部错误'

			if (error instanceof Error) {
				errorMessage = error.message
			}

			return json(
				{
					error: 'server_error',
					error_description: errorMessage,
				},
				{ status },
			)
		}
	},
})
