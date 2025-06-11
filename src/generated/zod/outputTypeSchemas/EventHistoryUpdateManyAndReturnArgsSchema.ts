import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { EventHistoryUpdateManyMutationInputSchema } from '../inputTypeSchemas/EventHistoryUpdateManyMutationInputSchema'
import { EventHistoryUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/EventHistoryUncheckedUpdateManyInputSchema'
import { EventHistoryWhereInputSchema } from '../inputTypeSchemas/EventHistoryWhereInputSchema'

export const EventHistoryUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.EventHistoryUpdateManyAndReturnArgs> =
	z
		.object({
			data: z.union([
				EventHistoryUpdateManyMutationInputSchema,
				EventHistoryUncheckedUpdateManyInputSchema,
			]),
			where: EventHistoryWhereInputSchema.optional(),
			limit: z.number().optional(),
		})
		.strict()

export default EventHistoryUpdateManyAndReturnArgsSchema
