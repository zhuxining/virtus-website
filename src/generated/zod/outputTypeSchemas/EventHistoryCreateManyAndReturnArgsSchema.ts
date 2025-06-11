import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { EventHistoryCreateManyInputSchema } from '../inputTypeSchemas/EventHistoryCreateManyInputSchema'

export const EventHistoryCreateManyAndReturnArgsSchema: z.ZodType<Prisma.EventHistoryCreateManyAndReturnArgs> =
	z
		.object({
			data: z.union([
				EventHistoryCreateManyInputSchema,
				EventHistoryCreateManyInputSchema.array(),
			]),
		})
		.strict()

export default EventHistoryCreateManyAndReturnArgsSchema
