import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { EssayLikeWhereUniqueInputSchema } from './EssayLikeWhereUniqueInputSchema'
import { EssayLikeUpdateWithoutEssayInputSchema } from './EssayLikeUpdateWithoutEssayInputSchema'
import { EssayLikeUncheckedUpdateWithoutEssayInputSchema } from './EssayLikeUncheckedUpdateWithoutEssayInputSchema'

export const EssayLikeUpdateWithWhereUniqueWithoutEssayInputSchema: z.ZodType<Prisma.EssayLikeUpdateWithWhereUniqueWithoutEssayInput> =
	z
		.object({
			where: z.lazy(() => EssayLikeWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => EssayLikeUpdateWithoutEssayInputSchema),
				z.lazy(() => EssayLikeUncheckedUpdateWithoutEssayInputSchema),
			]),
		})
		.strict()

export default EssayLikeUpdateWithWhereUniqueWithoutEssayInputSchema
