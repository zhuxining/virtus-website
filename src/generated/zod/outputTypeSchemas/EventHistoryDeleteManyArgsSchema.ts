import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { EventHistoryWhereInputSchema } from '../inputTypeSchemas/EventHistoryWhereInputSchema'

export const EventHistoryDeleteManyArgsSchema: z.ZodType<Prisma.EventHistoryDeleteManyArgs> =
	z
		.object({
			where: EventHistoryWhereInputSchema.optional(),
			limit: z.number().optional(),
		})
		.strict()

export default EventHistoryDeleteManyArgsSchema
