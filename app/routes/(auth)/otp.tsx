import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(auth)/otp')({
	component: RouteComponent,
})

function RouteComponent() {
	return <div>Hello "/(auth)/otp"!</div>
}
