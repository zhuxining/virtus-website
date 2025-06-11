import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { EventHistoryWhereInputSchema } from '../inputTypeSchemas/EventHistoryWhereInputSchema'
import { EventHistoryOrderByWithAggregationInputSchema } from '../inputTypeSchemas/EventHistoryOrderByWithAggregationInputSchema'
import { EventHistoryScalarFieldEnumSchema } from '../inputTypeSchemas/EventHistoryScalarFieldEnumSchema'
import { EventHistoryScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/EventHistoryScalarWhereWithAggregatesInputSchema'

export const EventHistoryGroupByArgsSchema: z.ZodType<Prisma.EventHistoryGroupByArgs> =
	z
		.object({
			where: EventHistoryWhereInputSchema.optional(),
			orderBy: z
				.union([
					EventHistoryOrderByWithAggregationInputSchema.array(),
					EventHistoryOrderByWithAggregationInputSchema,
				])
				.optional(),
			by: EventHistoryScalarFieldEnumSchema.array(),
			having: EventHistoryScalarWhereWithAggregatesInputSchema.optional(),
			take: z.number().optional(),
			skip: z.number().optional(),
		})
		.strict()

export default EventHistoryGroupByArgsSchema
