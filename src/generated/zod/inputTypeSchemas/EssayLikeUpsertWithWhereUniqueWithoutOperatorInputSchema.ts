import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { EssayLikeWhereUniqueInputSchema } from './EssayLikeWhereUniqueInputSchema'
import { EssayLikeUpdateWithoutOperatorInputSchema } from './EssayLikeUpdateWithoutOperatorInputSchema'
import { EssayLikeUncheckedUpdateWithoutOperatorInputSchema } from './EssayLikeUncheckedUpdateWithoutOperatorInputSchema'
import { EssayLikeCreateWithoutOperatorInputSchema } from './EssayLikeCreateWithoutOperatorInputSchema'
import { EssayLikeUncheckedCreateWithoutOperatorInputSchema } from './EssayLikeUncheckedCreateWithoutOperatorInputSchema'

export const EssayLikeUpsertWithWhereUniqueWithoutOperatorInputSchema: z.ZodType<Prisma.EssayLikeUpsertWithWhereUniqueWithoutOperatorInput> =
	z
		.object({
			where: z.lazy(() => EssayLikeWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => EssayLikeUpdateWithoutOperatorInputSchema),
				z.lazy(() => EssayLikeUncheckedUpdateWithoutOperatorInputSchema),
			]),
			create: z.union([
				z.lazy(() => EssayLikeCreateWithoutOperatorInputSchema),
				z.lazy(() => EssayLikeUncheckedCreateWithoutOperatorInputSchema),
			]),
		})
		.strict()

export default EssayLikeUpsertWithWhereUniqueWithoutOperatorInputSchema
