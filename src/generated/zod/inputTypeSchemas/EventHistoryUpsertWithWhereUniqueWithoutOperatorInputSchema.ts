import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { EventHistoryWhereUniqueInputSchema } from './EventHistoryWhereUniqueInputSchema'
import { EventHistoryUpdateWithoutOperatorInputSchema } from './EventHistoryUpdateWithoutOperatorInputSchema'
import { EventHistoryUncheckedUpdateWithoutOperatorInputSchema } from './EventHistoryUncheckedUpdateWithoutOperatorInputSchema'
import { EventHistoryCreateWithoutOperatorInputSchema } from './EventHistoryCreateWithoutOperatorInputSchema'
import { EventHistoryUncheckedCreateWithoutOperatorInputSchema } from './EventHistoryUncheckedCreateWithoutOperatorInputSchema'

export const EventHistoryUpsertWithWhereUniqueWithoutOperatorInputSchema: z.ZodType<Prisma.EventHistoryUpsertWithWhereUniqueWithoutOperatorInput> =
	z
		.object({
			where: z.lazy(() => EventHistoryWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => EventHistoryUpdateWithoutOperatorInputSchema),
				z.lazy(() => EventHistoryUncheckedUpdateWithoutOperatorInputSchema),
			]),
			create: z.union([
				z.lazy(() => EventHistoryCreateWithoutOperatorInputSchema),
				z.lazy(() => EventHistoryUncheckedCreateWithoutOperatorInputSchema),
			]),
		})
		.strict()

export default EventHistoryUpsertWithWhereUniqueWithoutOperatorInputSchema
