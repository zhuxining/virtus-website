import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { EventHistoryScalarWhereInputSchema } from './EventHistoryScalarWhereInputSchema'
import { EventHistoryUpdateManyMutationInputSchema } from './EventHistoryUpdateManyMutationInputSchema'
import { EventHistoryUncheckedUpdateManyWithoutOperatorInputSchema } from './EventHistoryUncheckedUpdateManyWithoutOperatorInputSchema'

export const EventHistoryUpdateManyWithWhereWithoutOperatorInputSchema: z.ZodType<Prisma.EventHistoryUpdateManyWithWhereWithoutOperatorInput> =
	z
		.object({
			where: z.lazy(() => EventHistoryScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => EventHistoryUpdateManyMutationInputSchema),
				z.lazy(() => EventHistoryUncheckedUpdateManyWithoutOperatorInputSchema),
			]),
		})
		.strict()

export default EventHistoryUpdateManyWithWhereWithoutOperatorInputSchema
