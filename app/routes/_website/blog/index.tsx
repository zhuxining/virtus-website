import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_website/blog/')({
	component: RouteComponent,
})

function RouteComponent() {
	return <div>Hello "/_website/blog/"!</div>
}
