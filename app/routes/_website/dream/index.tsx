import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_website/dream/')({
	component: RouteComponent,
})

function RouteComponent() {
	return <div>Hello "/_website/dream/"!</div>
}
