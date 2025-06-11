import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { EventHistoryWhereUniqueInputSchema } from './EventHistoryWhereUniqueInputSchema'
import { EventHistoryCreateWithoutOperatorInputSchema } from './EventHistoryCreateWithoutOperatorInputSchema'
import { EventHistoryUncheckedCreateWithoutOperatorInputSchema } from './EventHistoryUncheckedCreateWithoutOperatorInputSchema'

export const EventHistoryCreateOrConnectWithoutOperatorInputSchema: z.ZodType<Prisma.EventHistoryCreateOrConnectWithoutOperatorInput> =
	z
		.object({
			where: z.lazy(() => EventHistoryWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => EventHistoryCreateWithoutOperatorInputSchema),
				z.lazy(() => EventHistoryUncheckedCreateWithoutOperatorInputSchema),
			]),
		})
		.strict()

export default EventHistoryCreateOrConnectWithoutOperatorInputSchema
