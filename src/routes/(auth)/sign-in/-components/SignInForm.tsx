import { IconBrandGithub } from '@tabler/icons-react'
import React from 'react'
import { Button } from '*/components/ui/button'
import { cn } from '*/lib/utils'
import { createAuthClient } from 'better-auth/client'
import { genericOAuthClient } from 'better-auth/client/plugins'

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>

const authClient = createAuthClient({
	baseURL: 'http://127.0.0.1:3000',
	plugins: [genericOAuthClient()],
})

export function SignInForm({ className, ...props }: UserAuthFormProps) {
	const [isLoading, setIsLoading] = React.useState(false)

	async function handleGithubSignIn() {
		setIsLoading(true)
		try {
			await authClient.signIn.social({
				provider: 'github',
			})
		} catch (error) {
			console.error('GitHub登录失败:', error)
		} finally {
			setIsLoading(false)
		}
	}
	async function handleWechatWorkSignIn() {
		setIsLoading(true)
		try {
			await authClient.signIn.oauth2({
				providerId: 'wechat-work',
				callbackURL: '/dashboard',
			})
		} catch (error) {
			console.error('企业微信登录失败:', error)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<div className={cn('grid gap-3', className)} {...props}>
			<div className="flex justify-center items-center">
				<Button
					variant="outline"
					type="button"
					disabled={isLoading}
					className="w-full"
					onClick={handleGithubSignIn}
				>
					<IconBrandGithub className="h-4 w-4 mr-2" /> 使用GitHub登录
				</Button>
				<Button
					variant="outline"
					type="button"
					disabled={isLoading}
					className="w-full"
					onClick={handleWechatWorkSignIn}
				>
					<IconBrandGithub className="h-4 w-4 mr-2" /> 使用企业微信登录
				</Button>
			</div>
		</div>
	)
}
