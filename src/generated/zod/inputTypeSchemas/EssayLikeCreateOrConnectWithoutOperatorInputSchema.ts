import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { EssayLikeWhereUniqueInputSchema } from './EssayLikeWhereUniqueInputSchema'
import { EssayLikeCreateWithoutOperatorInputSchema } from './EssayLikeCreateWithoutOperatorInputSchema'
import { EssayLikeUncheckedCreateWithoutOperatorInputSchema } from './EssayLikeUncheckedCreateWithoutOperatorInputSchema'

export const EssayLikeCreateOrConnectWithoutOperatorInputSchema: z.ZodType<Prisma.EssayLikeCreateOrConnectWithoutOperatorInput> =
	z
		.object({
			where: z.lazy(() => EssayLikeWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => EssayLikeCreateWithoutOperatorInputSchema),
				z.lazy(() => EssayLikeUncheckedCreateWithoutOperatorInputSchema),
			]),
		})
		.strict()

export default EssayLikeCreateOrConnectWithoutOperatorInputSchema
