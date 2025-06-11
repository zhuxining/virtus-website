import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { EssayLikeWhereUniqueInputSchema } from './EssayLikeWhereUniqueInputSchema'
import { EssayLikeUpdateWithoutOperatorInputSchema } from './EssayLikeUpdateWithoutOperatorInputSchema'
import { EssayLikeUncheckedUpdateWithoutOperatorInputSchema } from './EssayLikeUncheckedUpdateWithoutOperatorInputSchema'

export const EssayLikeUpdateWithWhereUniqueWithoutOperatorInputSchema: z.ZodType<Prisma.EssayLikeUpdateWithWhereUniqueWithoutOperatorInput> =
	z
		.object({
			where: z.lazy(() => EssayLikeWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => EssayLikeUpdateWithoutOperatorInputSchema),
				z.lazy(() => EssayLikeUncheckedUpdateWithoutOperatorInputSchema),
			]),
		})
		.strict()

export default EssayLikeUpdateWithWhereUniqueWithoutOperatorInputSchema
