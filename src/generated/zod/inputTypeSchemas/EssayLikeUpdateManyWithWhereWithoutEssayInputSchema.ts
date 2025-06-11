import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { EssayLikeScalarWhereInputSchema } from './EssayLikeScalarWhereInputSchema'
import { EssayLikeUpdateManyMutationInputSchema } from './EssayLikeUpdateManyMutationInputSchema'
import { EssayLikeUncheckedUpdateManyWithoutEssayInputSchema } from './EssayLikeUncheckedUpdateManyWithoutEssayInputSchema'

export const EssayLikeUpdateManyWithWhereWithoutEssayInputSchema: z.ZodType<Prisma.EssayLikeUpdateManyWithWhereWithoutEssayInput> =
	z
		.object({
			where: z.lazy(() => EssayLikeScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => EssayLikeUpdateManyMutationInputSchema),
				z.lazy(() => EssayLikeUncheckedUpdateManyWithoutEssayInputSchema),
			]),
		})
		.strict()

export default EssayLikeUpdateManyWithWhereWithoutEssayInputSchema
