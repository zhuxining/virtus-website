import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { EssayUpdateWithoutEssayLikeInputSchema } from './EssayUpdateWithoutEssayLikeInputSchema'
import { EssayUncheckedUpdateWithoutEssayLikeInputSchema } from './EssayUncheckedUpdateWithoutEssayLikeInputSchema'
import { EssayCreateWithoutEssayLikeInputSchema } from './EssayCreateWithoutEssayLikeInputSchema'
import { EssayUncheckedCreateWithoutEssayLikeInputSchema } from './EssayUncheckedCreateWithoutEssayLikeInputSchema'
import { EssayWhereInputSchema } from './EssayWhereInputSchema'

export const EssayUpsertWithoutEssayLikeInputSchema: z.ZodType<Prisma.EssayUpsertWithoutEssayLikeInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => EssayUpdateWithoutEssayLikeInputSchema),
				z.lazy(() => EssayUncheckedUpdateWithoutEssayLikeInputSchema),
			]),
			create: z.union([
				z.lazy(() => EssayCreateWithoutEssayLikeInputSchema),
				z.lazy(() => EssayUncheckedCreateWithoutEssayLikeInputSchema),
			]),
			where: z.lazy(() => EssayWhereInputSchema).optional(),
		})
		.strict()

export default EssayUpsertWithoutEssayLikeInputSchema
