import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { EssayWhereUniqueInputSchema } from './EssayWhereUniqueInputSchema'
import { EssayCreateWithoutAuthorInputSchema } from './EssayCreateWithoutAuthorInputSchema'
import { EssayUncheckedCreateWithoutAuthorInputSchema } from './EssayUncheckedCreateWithoutAuthorInputSchema'

export const EssayCreateOrConnectWithoutAuthorInputSchema: z.ZodType<Prisma.EssayCreateOrConnectWithoutAuthorInput> =
	z
		.object({
			where: z.lazy(() => EssayWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => EssayCreateWithoutAuthorInputSchema),
				z.lazy(() => EssayUncheckedCreateWithoutAuthorInputSchema),
			]),
		})
		.strict()

export default EssayCreateOrConnectWithoutAuthorInputSchema
