import { Link, createFileRoute } from '@tanstack/react-router'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { SignUpForm } from './-components/sign-up-form'

export const Route = createFileRoute('/(auth)/sign-up/')({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<Card className="gap-4">
			<CardHeader>
				<CardTitle className="text-lg tracking-tight">
					Create an account
				</CardTitle>
				<CardDescription>
					Enter your email and password to create an account. <br />
					Already have an account?&nbsp;
					<Link
						to="/sign-in"
						className="hover:text-primary underline underline-offset-4"
					>
						Sign In
					</Link>
				</CardDescription>
			</CardHeader>
			<CardContent>
				<SignUpForm className="  border-amber-300 bg-amber-500" />
			</CardContent>
			<CardFooter>
				<p className="text-muted-foreground px-8 text-center text-sm">
					By creating an account, you agree to our&nbsp;
					<a
						href="/terms"
						className="hover:text-primary underline underline-offset-4"
					>
						Terms of Service
					</a>
					&nbsp; and&nbsp;
					<a
						href="/privacy"
						className="hover:text-primary underline underline-offset-4"
					>
						Privacy Policy
					</a>
					.
				</p>
			</CardFooter>
		</Card>
	)
}
