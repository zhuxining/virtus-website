import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { EventHistoryWhereUniqueInputSchema } from './EventHistoryWhereUniqueInputSchema'
import { EventHistoryUpdateWithoutOperatorInputSchema } from './EventHistoryUpdateWithoutOperatorInputSchema'
import { EventHistoryUncheckedUpdateWithoutOperatorInputSchema } from './EventHistoryUncheckedUpdateWithoutOperatorInputSchema'

export const EventHistoryUpdateWithWhereUniqueWithoutOperatorInputSchema: z.ZodType<Prisma.EventHistoryUpdateWithWhereUniqueWithoutOperatorInput> =
	z
		.object({
			where: z.lazy(() => EventHistoryWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => EventHistoryUpdateWithoutOperatorInputSchema),
				z.lazy(() => EventHistoryUncheckedUpdateWithoutOperatorInputSchema),
			]),
		})
		.strict()

export default EventHistoryUpdateWithWhereUniqueWithoutOperatorInputSchema
