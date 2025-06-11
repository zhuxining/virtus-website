import { z } from 'zod'
import type { Prisma } from '@/generated/prisma'
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema'

export const EventHistoryIncludeSchema: z.ZodType<Prisma.EventHistoryInclude> =
	z
		.object({
			operator: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
		})
		.strict()

export default EventHistoryIncludeSchema
