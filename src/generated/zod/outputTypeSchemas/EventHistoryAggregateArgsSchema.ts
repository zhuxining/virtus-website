import { z } from 'zod'
import type { Prisma } from '@/generated/prisma'
import { EventHistoryWhereInputSchema } from '../inputTypeSchemas/EventHistoryWhereInputSchema'
import { EventHistoryOrderByWithRelationInputSchema } from '../inputTypeSchemas/EventHistoryOrderByWithRelationInputSchema'
import { EventHistoryWhereUniqueInputSchema } from '../inputTypeSchemas/EventHistoryWhereUniqueInputSchema'

export const EventHistoryAggregateArgsSchema: z.ZodType<Prisma.EventHistoryAggregateArgs> =
	z
		.object({
			where: EventHistoryWhereInputSchema.optional(),
			orderBy: z
				.union([
					EventHistoryOrderByWithRelationInputSchema.array(),
					EventHistoryOrderByWithRelationInputSchema,
				])
				.optional(),
			cursor: EventHistoryWhereUniqueInputSchema.optional(),
			take: z.number().optional(),
			skip: z.number().optional(),
		})
		.strict()

export default EventHistoryAggregateArgsSchema
