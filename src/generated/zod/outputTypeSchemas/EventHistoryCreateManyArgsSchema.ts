import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { EventHistoryCreateManyInputSchema } from '../inputTypeSchemas/EventHistoryCreateManyInputSchema'

export const EventHistoryCreateManyArgsSchema: z.ZodType<Prisma.EventHistoryCreateManyArgs> =
	z
		.object({
			data: z.union([
				EventHistoryCreateManyInputSchema,
				EventHistoryCreateManyInputSchema.array(),
			]),
		})
		.strict()

export default EventHistoryCreateManyArgsSchema
