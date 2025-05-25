import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_website/donation/')({
	component: RouteComponent,
})

function RouteComponent() {
	return <div>Hello "/_website/donation/"!</div>
}
