import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { EssayLikeWhereUniqueInputSchema } from './EssayLikeWhereUniqueInputSchema'
import { EssayLikeUpdateWithoutEssayInputSchema } from './EssayLikeUpdateWithoutEssayInputSchema'
import { EssayLikeUncheckedUpdateWithoutEssayInputSchema } from './EssayLikeUncheckedUpdateWithoutEssayInputSchema'
import { EssayLikeCreateWithoutEssayInputSchema } from './EssayLikeCreateWithoutEssayInputSchema'
import { EssayLikeUncheckedCreateWithoutEssayInputSchema } from './EssayLikeUncheckedCreateWithoutEssayInputSchema'

export const EssayLikeUpsertWithWhereUniqueWithoutEssayInputSchema: z.ZodType<Prisma.EssayLikeUpsertWithWhereUniqueWithoutEssayInput> =
	z
		.object({
			where: z.lazy(() => EssayLikeWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => EssayLikeUpdateWithoutEssayInputSchema),
				z.lazy(() => EssayLikeUncheckedUpdateWithoutEssayInputSchema),
			]),
			create: z.union([
				z.lazy(() => EssayLikeCreateWithoutEssayInputSchema),
				z.lazy(() => EssayLikeUncheckedCreateWithoutEssayInputSchema),
			]),
		})
		.strict()

export default EssayLikeUpsertWithWhereUniqueWithoutEssayInputSchema
