import { IconBrandGithub } from '@tabler/icons-react'
import React from 'react'
import { Button } from '~/components/ui/button'
import { cn } from '~/lib/utils'
import { createAuthClient } from 'better-auth/client'

type UserAuthFormProps = React.HTMLAttributes<HTMLFormElement>

const authClient = createAuthClient()

export function SignUpForm({ className, ...props }: UserAuthFormProps) {
	const [isLoading, setIsLoading] = React.useState(false)

	async function handleGithubSignUp() {
		setIsLoading(true)
		try {
			await authClient.signIn.social({
				provider: 'github',
			})
		} catch (error) {
			console.error('GitHub注册失败:', error)
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
					onClick={handleGithubSignUp}
				>
					<IconBrandGithub className="h-4 w-4 mr-2" /> 使用GitHub注册
				</Button>
			</div>
		</div>
	)
}
