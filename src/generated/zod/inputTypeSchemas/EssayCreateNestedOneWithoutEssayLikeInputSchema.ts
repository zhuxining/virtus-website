import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { EssayCreateWithoutEssayLikeInputSchema } from './EssayCreateWithoutEssayLikeInputSchema'
import { EssayUncheckedCreateWithoutEssayLikeInputSchema } from './EssayUncheckedCreateWithoutEssayLikeInputSchema'
import { EssayCreateOrConnectWithoutEssayLikeInputSchema } from './EssayCreateOrConnectWithoutEssayLikeInputSchema'
import { EssayWhereUniqueInputSchema } from './EssayWhereUniqueInputSchema'

export const EssayCreateNestedOneWithoutEssayLikeInputSchema: z.ZodType<Prisma.EssayCreateNestedOneWithoutEssayLikeInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => EssayCreateWithoutEssayLikeInputSchema),
					z.lazy(() => EssayUncheckedCreateWithoutEssayLikeInputSchema),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => EssayCreateOrConnectWithoutEssayLikeInputSchema)
				.optional(),
			connect: z.lazy(() => EssayWhereUniqueInputSchema).optional(),
		})
		.strict()

export default EssayCreateNestedOneWithoutEssayLikeInputSchema
