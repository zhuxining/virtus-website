import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { EssayLikeCreateWithoutEssayInputSchema } from './EssayLikeCreateWithoutEssayInputSchema'
import { EssayLikeUncheckedCreateWithoutEssayInputSchema } from './EssayLikeUncheckedCreateWithoutEssayInputSchema'
import { EssayLikeCreateOrConnectWithoutEssayInputSchema } from './EssayLikeCreateOrConnectWithoutEssayInputSchema'
import { EssayLikeCreateManyEssayInputEnvelopeSchema } from './EssayLikeCreateManyEssayInputEnvelopeSchema'
import { EssayLikeWhereUniqueInputSchema } from './EssayLikeWhereUniqueInputSchema'

export const EssayLikeCreateNestedManyWithoutEssayInputSchema: z.ZodType<Prisma.EssayLikeCreateNestedManyWithoutEssayInput> =
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
			createMany: z
				.lazy(() => EssayLikeCreateManyEssayInputEnvelopeSchema)
				.optional(),
			connect: z
				.union([
					z.lazy(() => EssayLikeWhereUniqueInputSchema),
					z.lazy(() => EssayLikeWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict()

export default EssayLikeCreateNestedManyWithoutEssayInputSchema
