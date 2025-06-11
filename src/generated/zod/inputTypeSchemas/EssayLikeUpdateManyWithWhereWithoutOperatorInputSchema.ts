import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { EssayLikeScalarWhereInputSchema } from './EssayLikeScalarWhereInputSchema'
import { EssayLikeUpdateManyMutationInputSchema } from './EssayLikeUpdateManyMutationInputSchema'
import { EssayLikeUncheckedUpdateManyWithoutOperatorInputSchema } from './EssayLikeUncheckedUpdateManyWithoutOperatorInputSchema'

export const EssayLikeUpdateManyWithWhereWithoutOperatorInputSchema: z.ZodType<Prisma.EssayLikeUpdateManyWithWhereWithoutOperatorInput> =
	z
		.object({
			where: z.lazy(() => EssayLikeScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => EssayLikeUpdateManyMutationInputSchema),
				z.lazy(() => EssayLikeUncheckedUpdateManyWithoutOperatorInputSchema),
			]),
		})
		.strict()

export default EssayLikeUpdateManyWithWhereWithoutOperatorInputSchema
