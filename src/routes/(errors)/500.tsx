import { InternalServerError } from '@/components/errors/InternalServerError'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(errors)/500')({
	component: InternalServerError,
})
