import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { EssayLikeCreateWithoutOperatorInputSchema } from './EssayLikeCreateWithoutOperatorInputSchema'
import { EssayLikeUncheckedCreateWithoutOperatorInputSchema } from './EssayLikeUncheckedCreateWithoutOperatorInputSchema'
import { EssayLikeCreateOrConnectWithoutOperatorInputSchema } from './EssayLikeCreateOrConnectWithoutOperatorInputSchema'
import { EssayLikeUpsertWithWhereUniqueWithoutOperatorInputSchema } from './EssayLikeUpsertWithWhereUniqueWithoutOperatorInputSchema'
import { EssayLikeCreateManyOperatorInputEnvelopeSchema } from './EssayLikeCreateManyOperatorInputEnvelopeSchema'
import { EssayLikeWhereUniqueInputSchema } from './EssayLikeWhereUniqueInputSchema'
import { EssayLikeUpdateWithWhereUniqueWithoutOperatorInputSchema } from './EssayLikeUpdateWithWhereUniqueWithoutOperatorInputSchema'
import { EssayLikeUpdateManyWithWhereWithoutOperatorInputSchema } from './EssayLikeUpdateManyWithWhereWithoutOperatorInputSchema'
import { EssayLikeScalarWhereInputSchema } from './EssayLikeScalarWhereInputSchema'

export const EssayLikeUncheckedUpdateManyWithoutOperatorNestedInputSchema: z.ZodType<Prisma.EssayLikeUncheckedUpdateManyWithoutOperatorNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => EssayLikeCreateWithoutOperatorInputSchema),
					z.lazy(() => EssayLikeCreateWithoutOperatorInputSchema).array(),
					z.lazy(() => EssayLikeUncheckedCreateWithoutOperatorInputSchema),
					z
						.lazy(() => EssayLikeUncheckedCreateWithoutOperatorInputSchema)
						.array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => EssayLikeCreateOrConnectWithoutOperatorInputSchema),
					z
						.lazy(() => EssayLikeCreateOrConnectWithoutOperatorInputSchema)
						.array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(
						() => EssayLikeUpsertWithWhereUniqueWithoutOperatorInputSchema,
					),
					z
						.lazy(
							() => EssayLikeUpsertWithWhereUniqueWithoutOperatorInputSchema,
						)
						.array(),
				])
				.optional(),
			createMany: z
				.lazy(() => EssayLikeCreateManyOperatorInputEnvelopeSchema)
				.optional(),
			set: z
				.union([
					z.lazy(() => EssayLikeWhereUniqueInputSchema),
					z.lazy(() => EssayLikeWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => EssayLikeWhereUniqueInputSchema),
					z.lazy(() => EssayLikeWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => EssayLikeWhereUniqueInputSchema),
					z.lazy(() => EssayLikeWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => EssayLikeWhereUniqueInputSchema),
					z.lazy(() => EssayLikeWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(
						() => EssayLikeUpdateWithWhereUniqueWithoutOperatorInputSchema,
					),
					z
						.lazy(
							() => EssayLikeUpdateWithWhereUniqueWithoutOperatorInputSchema,
						)
						.array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => EssayLikeUpdateManyWithWhereWithoutOperatorInputSchema),
					z
						.lazy(() => EssayLikeUpdateManyWithWhereWithoutOperatorInputSchema)
						.array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => EssayLikeScalarWhereInputSchema),
					z.lazy(() => EssayLikeScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict()

export default EssayLikeUncheckedUpdateManyWithoutOperatorNestedInputSchema
