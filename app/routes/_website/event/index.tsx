import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_website/event/')({
	component: RouteComponent,
})

function RouteComponent() {
	return <div>Hello "/_website/event/"!</div>
}
