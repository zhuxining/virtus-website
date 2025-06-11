import { ComingSoon } from '@/components/ComingSoon'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_admin-console/help-center/')({
	component: ComingSoon,
})
