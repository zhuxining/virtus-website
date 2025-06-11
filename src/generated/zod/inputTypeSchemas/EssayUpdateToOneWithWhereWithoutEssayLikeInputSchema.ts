import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { EssayWhereInputSchema } from './EssayWhereInputSchema'
import { EssayUpdateWithoutEssayLikeInputSchema } from './EssayUpdateWithoutEssayLikeInputSchema'
import { EssayUncheckedUpdateWithoutEssayLikeInputSchema } from './EssayUncheckedUpdateWithoutEssayLikeInputSchema'

export const EssayUpdateToOneWithWhereWithoutEssayLikeInputSchema: z.ZodType<Prisma.EssayUpdateToOneWithWhereWithoutEssayLikeInput> =
	z
		.object({
			where: z.lazy(() => EssayWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => EssayUpdateWithoutEssayLikeInputSchema),
				z.lazy(() => EssayUncheckedUpdateWithoutEssayLikeInputSchema),
			]),
		})
		.strict()

export default EssayUpdateToOneWithWhereWithoutEssayLikeInputSchema
