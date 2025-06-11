import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema'

export const EventHistorySelectSchema: z.ZodType<Prisma.EventHistorySelect> = z
	.object({
		id: z.boolean().optional(),
		title: z.boolean().optional(),
		description: z.boolean().optional(),
		content: z.boolean().optional(),
		banner: z.boolean().optional(),
		operatorId: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		operator: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
	})
	.strict()

export default EventHistorySelectSchema
