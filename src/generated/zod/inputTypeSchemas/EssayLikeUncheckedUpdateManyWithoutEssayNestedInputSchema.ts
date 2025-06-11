import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { EssayLikeCreateWithoutEssayInputSchema } from './EssayLikeCreateWithoutEssayInputSchema'
import { EssayLikeUncheckedCreateWithoutEssayInputSchema } from './EssayLikeUncheckedCreateWithoutEssayInputSchema'
import { EssayLikeCreateOrConnectWithoutEssayInputSchema } from './EssayLikeCreateOrConnectWithoutEssayInputSchema'
import { EssayLikeUpsertWithWhereUniqueWithoutEssayInputSchema } from './EssayLikeUpsertWithWhereUniqueWithoutEssayInputSchema'
import { EssayLikeCreateManyEssayInputEnvelopeSchema } from './EssayLikeCreateManyEssayInputEnvelopeSchema'
import { EssayLikeWhereUniqueInputSchema } from './EssayLikeWhereUniqueInputSchema'
import { EssayLikeUpdateWithWhereUniqueWithoutEssayInputSchema } from './EssayLikeUpdateWithWhereUniqueWithoutEssayInputSchema'
import { EssayLikeUpdateManyWithWhereWithoutEssayInputSchema } from './EssayLikeUpdateManyWithWhereWithoutEssayInputSchema'
import { EssayLikeScalarWhereInputSchema } from './EssayLikeScalarWhereInputSchema'

export const EssayLikeUncheckedUpdateManyWithoutEssayNestedInputSchema: z.ZodType<Prisma.EssayLikeUncheckedUpdateManyWithoutEssayNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => EssayLikeCreateWithoutEssayInputSchema),
					z.lazy(() => EssayLikeCreateWithoutEssayInputSchema).array(),
					z.lazy(() => EssayLikeUncheckedCreateWithoutEssayInputSchema),
					z.lazy(() => EssayLikeUncheckedCreateWithoutEssayInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => EssayLikeCreateOrConnectWithoutEssayInputSchema),
					z.lazy(() => EssayLikeCreateOrConnectWithoutEssayInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => EssayLikeUpsertWithWhereUniqueWithoutEssayInputSchema),
					z
						.lazy(() => EssayLikeUpsertWithWhereUniqueWithoutEssayInputSchema)
						.array(),
				])
				.optional(),
			createMany: z
				.lazy(() => EssayLikeCreateManyEssayInputEnvelopeSchema)
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
					z.lazy(() => EssayLikeUpdateWithWhereUniqueWithoutEssayInputSchema),
					z
						.lazy(() => EssayLikeUpdateWithWhereUniqueWithoutEssayInputSchema)
						.array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => EssayLikeUpdateManyWithWhereWithoutEssayInputSchema),
					z
						.lazy(() => EssayLikeUpdateManyWithWhereWithoutEssayInputSchema)
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

export default EssayLikeUncheckedUpdateManyWithoutEssayNestedInputSchema
