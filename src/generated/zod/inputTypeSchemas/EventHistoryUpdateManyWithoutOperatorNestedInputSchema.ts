import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { EventHistoryCreateWithoutOperatorInputSchema } from './EventHistoryCreateWithoutOperatorInputSchema'
import { EventHistoryUncheckedCreateWithoutOperatorInputSchema } from './EventHistoryUncheckedCreateWithoutOperatorInputSchema'
import { EventHistoryCreateOrConnectWithoutOperatorInputSchema } from './EventHistoryCreateOrConnectWithoutOperatorInputSchema'
import { EventHistoryUpsertWithWhereUniqueWithoutOperatorInputSchema } from './EventHistoryUpsertWithWhereUniqueWithoutOperatorInputSchema'
import { EventHistoryCreateManyOperatorInputEnvelopeSchema } from './EventHistoryCreateManyOperatorInputEnvelopeSchema'
import { EventHistoryWhereUniqueInputSchema } from './EventHistoryWhereUniqueInputSchema'
import { EventHistoryUpdateWithWhereUniqueWithoutOperatorInputSchema } from './EventHistoryUpdateWithWhereUniqueWithoutOperatorInputSchema'
import { EventHistoryUpdateManyWithWhereWithoutOperatorInputSchema } from './EventHistoryUpdateManyWithWhereWithoutOperatorInputSchema'
import { EventHistoryScalarWhereInputSchema } from './EventHistoryScalarWhereInputSchema'

export const EventHistoryUpdateManyWithoutOperatorNestedInputSchema: z.ZodType<Prisma.EventHistoryUpdateManyWithoutOperatorNestedInput> =
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
			upsert: z
				.union([
					z.lazy(
						() => EventHistoryUpsertWithWhereUniqueWithoutOperatorInputSchema,
					),
					z
						.lazy(
							() => EventHistoryUpsertWithWhereUniqueWithoutOperatorInputSchema,
						)
						.array(),
				])
				.optional(),
			createMany: z
				.lazy(() => EventHistoryCreateManyOperatorInputEnvelopeSchema)
				.optional(),
			set: z
				.union([
					z.lazy(() => EventHistoryWhereUniqueInputSchema),
					z.lazy(() => EventHistoryWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => EventHistoryWhereUniqueInputSchema),
					z.lazy(() => EventHistoryWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => EventHistoryWhereUniqueInputSchema),
					z.lazy(() => EventHistoryWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => EventHistoryWhereUniqueInputSchema),
					z.lazy(() => EventHistoryWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(
						() => EventHistoryUpdateWithWhereUniqueWithoutOperatorInputSchema,
					),
					z
						.lazy(
							() => EventHistoryUpdateWithWhereUniqueWithoutOperatorInputSchema,
						)
						.array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(
						() => EventHistoryUpdateManyWithWhereWithoutOperatorInputSchema,
					),
					z
						.lazy(
							() => EventHistoryUpdateManyWithWhereWithoutOperatorInputSchema,
						)
						.array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => EventHistoryScalarWhereInputSchema),
					z.lazy(() => EventHistoryScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict()

export default EventHistoryUpdateManyWithoutOperatorNestedInputSchema
