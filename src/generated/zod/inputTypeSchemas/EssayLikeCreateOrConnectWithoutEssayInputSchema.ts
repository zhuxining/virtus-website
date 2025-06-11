import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { EssayLikeWhereUniqueInputSchema } from './EssayLikeWhereUniqueInputSchema'
import { EssayLikeCreateWithoutEssayInputSchema } from './EssayLikeCreateWithoutEssayInputSchema'
import { EssayLikeUncheckedCreateWithoutEssayInputSchema } from './EssayLikeUncheckedCreateWithoutEssayInputSchema'

export const EssayLikeCreateOrConnectWithoutEssayInputSchema: z.ZodType<Prisma.EssayLikeCreateOrConnectWithoutEssayInput> =
	z
		.object({
			where: z.lazy(() => EssayLikeWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => EssayLikeCreateWithoutEssayInputSchema),
				z.lazy(() => EssayLikeUncheckedCreateWithoutEssayInputSchema),
			]),
		})
		.strict()

export default EssayLikeCreateOrConnectWithoutEssayInputSchema
