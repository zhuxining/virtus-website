import { useNavigate } from '@tanstack/react-router'
import { Button } from '../ui/button'

export function UnauthorizedError() {
	const navigate = useNavigate()

	return (
		<div className="h-svh">
			<div className="m-auto flex h-full w-full flex-col items-center justify-center gap-2">
				<h1 className="text-[7rem] leading-tight font-bold">401</h1>
				<span className="font-medium">Unauthorized Access</span>
				<p className="text-muted-foreground text-center">
					Please log in with the appropriate credentials <br /> to access this
					resource.
				</p>
				<div className="mt-6 flex gap-4">
					<Button variant="outline" onClick={() => window.history.back()}>
						Go Back
					</Button>
					<Button onClick={() => navigate({ to: '/' })}>Back to Home</Button>
				</div>
			</div>
		</div>
	)
}
