import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { EssayLikeCreateWithoutOperatorInputSchema } from './EssayLikeCreateWithoutOperatorInputSchema'
import { EssayLikeUncheckedCreateWithoutOperatorInputSchema } from './EssayLikeUncheckedCreateWithoutOperatorInputSchema'
import { EssayLikeCreateOrConnectWithoutOperatorInputSchema } from './EssayLikeCreateOrConnectWithoutOperatorInputSchema'
import { EssayLikeCreateManyOperatorInputEnvelopeSchema } from './EssayLikeCreateManyOperatorInputEnvelopeSchema'
import { EssayLikeWhereUniqueInputSchema } from './EssayLikeWhereUniqueInputSchema'

export const EssayLikeUncheckedCreateNestedManyWithoutOperatorInputSchema: z.ZodType<Prisma.EssayLikeUncheckedCreateNestedManyWithoutOperatorInput> =
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
			createMany: z
				.lazy(() => EssayLikeCreateManyOperatorInputEnvelopeSchema)
				.optional(),
			connect: z
				.union([
					z.lazy(() => EssayLikeWhereUniqueInputSchema),
					z.lazy(() => EssayLikeWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict()

export default EssayLikeUncheckedCreateNestedManyWithoutOperatorInputSchema
