import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { EssayWhereUniqueInputSchema } from './EssayWhereUniqueInputSchema'
import { EssayUpdateWithoutAuthorInputSchema } from './EssayUpdateWithoutAuthorInputSchema'
import { EssayUncheckedUpdateWithoutAuthorInputSchema } from './EssayUncheckedUpdateWithoutAuthorInputSchema'
import { EssayCreateWithoutAuthorInputSchema } from './EssayCreateWithoutAuthorInputSchema'
import { EssayUncheckedCreateWithoutAuthorInputSchema } from './EssayUncheckedCreateWithoutAuthorInputSchema'

export const EssayUpsertWithWhereUniqueWithoutAuthorInputSchema: z.ZodType<Prisma.EssayUpsertWithWhereUniqueWithoutAuthorInput> =
	z
		.object({
			where: z.lazy(() => EssayWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => EssayUpdateWithoutAuthorInputSchema),
				z.lazy(() => EssayUncheckedUpdateWithoutAuthorInputSchema),
			]),
			create: z.union([
				z.lazy(() => EssayCreateWithoutAuthorInputSchema),
				z.lazy(() => EssayUncheckedCreateWithoutAuthorInputSchema),
			]),
		})
		.strict()

export default EssayUpsertWithWhereUniqueWithoutAuthorInputSchema
