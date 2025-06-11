import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { EventHistoryCreateManyOperatorInputSchema } from './EventHistoryCreateManyOperatorInputSchema'

export const EventHistoryCreateManyOperatorInputEnvelopeSchema: z.ZodType<Prisma.EventHistoryCreateManyOperatorInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => EventHistoryCreateManyOperatorInputSchema),
				z.lazy(() => EventHistoryCreateManyOperatorInputSchema).array(),
			]),
		})
		.strict()

export default EventHistoryCreateManyOperatorInputEnvelopeSchema
