import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { EssayWhereUniqueInputSchema } from './EssayWhereUniqueInputSchema'
import { EssayUpdateWithoutAuthorInputSchema } from './EssayUpdateWithoutAuthorInputSchema'
import { EssayUncheckedUpdateWithoutAuthorInputSchema } from './EssayUncheckedUpdateWithoutAuthorInputSchema'

export const EssayUpdateWithWhereUniqueWithoutAuthorInputSchema: z.ZodType<Prisma.EssayUpdateWithWhereUniqueWithoutAuthorInput> =
	z
		.object({
			where: z.lazy(() => EssayWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => EssayUpdateWithoutAuthorInputSchema),
				z.lazy(() => EssayUncheckedUpdateWithoutAuthorInputSchema),
			]),
		})
		.strict()

export default EssayUpdateWithWhereUniqueWithoutAuthorInputSchema
