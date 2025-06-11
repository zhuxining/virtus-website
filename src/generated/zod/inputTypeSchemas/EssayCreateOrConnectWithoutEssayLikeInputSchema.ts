import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { EssayWhereUniqueInputSchema } from './EssayWhereUniqueInputSchema'
import { EssayCreateWithoutEssayLikeInputSchema } from './EssayCreateWithoutEssayLikeInputSchema'
import { EssayUncheckedCreateWithoutEssayLikeInputSchema } from './EssayUncheckedCreateWithoutEssayLikeInputSchema'

export const EssayCreateOrConnectWithoutEssayLikeInputSchema: z.ZodType<Prisma.EssayCreateOrConnectWithoutEssayLikeInput> =
	z
		.object({
			where: z.lazy(() => EssayWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => EssayCreateWithoutEssayLikeInputSchema),
				z.lazy(() => EssayUncheckedCreateWithoutEssayLikeInputSchema),
			]),
		})
		.strict()

export default EssayCreateOrConnectWithoutEssayLikeInputSchema
