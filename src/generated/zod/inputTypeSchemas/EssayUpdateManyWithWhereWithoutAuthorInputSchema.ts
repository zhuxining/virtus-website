import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { EssayScalarWhereInputSchema } from './EssayScalarWhereInputSchema'
import { EssayUpdateManyMutationInputSchema } from './EssayUpdateManyMutationInputSchema'
import { EssayUncheckedUpdateManyWithoutAuthorInputSchema } from './EssayUncheckedUpdateManyWithoutAuthorInputSchema'

export const EssayUpdateManyWithWhereWithoutAuthorInputSchema: z.ZodType<Prisma.EssayUpdateManyWithWhereWithoutAuthorInput> =
	z
		.object({
			where: z.lazy(() => EssayScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => EssayUpdateManyMutationInputSchema),
				z.lazy(() => EssayUncheckedUpdateManyWithoutAuthorInputSchema),
			]),
		})
		.strict()

export default EssayUpdateManyWithWhereWithoutAuthorInputSchema
