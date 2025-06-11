import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { EventHistoryCreateWithoutOperatorInputSchema } from './EventHistoryCreateWithoutOperatorInputSchema'
import { EventHistoryUncheckedCreateWithoutOperatorInputSchema } from './EventHistoryUncheckedCreateWithoutOperatorInputSchema'
import { EventHistoryCreateOrConnectWithoutOperatorInputSchema } from './EventHistoryCreateOrConnectWithoutOperatorInputSchema'
import { EventHistoryCreateManyOperatorInputEnvelopeSchema } from './EventHistoryCreateManyOperatorInputEnvelopeSchema'
import { EventHistoryWhereUniqueInputSchema } from './EventHistoryWhereUniqueInputSchema'

export const EventHistoryUncheckedCreateNestedManyWithoutOperatorInputSchema: z.ZodType<Prisma.EventHistoryUncheckedCreateNestedManyWithoutOperatorInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => EventHistoryCreateWithoutOperatorInputSchema),
					z.lazy(() => EventHistoryCreateWithoutOperatorInputSchema).array(),
					z.lazy(() => EventHistoryUncheckedCreateWithoutOperatorInputSchema),
					z
						.lazy(() => EventHistoryUncheckedCreateWithoutOperatorInputSchema)
						.array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => EventHistoryCreateOrConnectWithoutOperatorInputSchema),
					z
						.lazy(() => EventHistoryCreateOrConnectWithoutOperatorInputSchema)
						.array(),
				])
				.optional(),
			createMany: z
				.lazy(() => EventHistoryCreateManyOperatorInputEnvelopeSchema)
				.optional(),
			connect: z
				.union([
					z.lazy(() => EventHistoryWhereUniqueInputSchema),
					z.lazy(() => EventHistoryWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict()

export default EventHistoryUncheckedCreateNestedManyWithoutOperatorInputSchema
