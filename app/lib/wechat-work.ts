// 企业微信 token 缓存
type EnterpriseTokenCache = {
	token: string
	expiresAt: number
}

// 全局缓存对象
let enterpriseTokenCache: EnterpriseTokenCache = {
	token: '',
	expiresAt: 0,
}

/**
 * 获取企业微信访问令牌
 * 使用企业ID和应用密钥获取企业微信API的access_token
 */
export async function getEnterpriseToken(): Promise<string> {
	const corpId = process.env.WECHAT_WORK_CORP_ID
	const corpSecret = process.env.WECHAT_WORK_CORP_SECRET

	if (!corpId || !corpSecret) {
		throw new Error(
			'企业微信配置缺失：需要WECHAT_WORK_CORP_ID和WECHAT_WORK_CORP_SECRET环境变量',
		)
	}

	const now = Date.now()

	// 检查缓存是否有效
	if (enterpriseTokenCache.token && enterpriseTokenCache.expiresAt > now) {
		return enterpriseTokenCache.token
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

	// 更新缓存，提前60秒过期以避免边界问题
	enterpriseTokenCache = {
		token: data.access_token,
		expiresAt: now + (data.expires_in - 60) * 1000,
	}

	return data.access_token
}

/**
 * 获取企业微信用户信息
 * 使用临时授权码获取用户基本信息
 */
export async function getUserInfoByCode(accessToken: string, code: string) {
	const userIdUrl = `https://qyapi.weixin.qq.com/cgi-bin/auth/getuserinfo?access_token=${accessToken}&code=${code}`
	const userIdResponse = await fetch(userIdUrl)
	const userIdData = (await userIdResponse.json()) as {
		errcode: number
		errmsg: string
		userid?: string
	}
	const userInfoUrl = `https://qyapi.weixin.qq.com/cgi-bin/user/get?access_token=${accessToken}&userid=${userIdData.userid}`
	const userResponse = await fetch(userInfoUrl)
	const userInfo = (await userResponse.json()) as {
		errcode: number
		errmsg: string
		userid?: string
		name?: string
		email?: string
		avatar?: string
	}

	if (userInfo.errcode !== 0) {
		throw new Error(
			`获取用户信息失败: ${userInfo.errmsg} (${userInfo.errcode})`,
		)
	}

	return userInfo
}
