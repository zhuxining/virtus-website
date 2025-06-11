import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { EssayCreateWithoutEssayLikeInputSchema } from './EssayCreateWithoutEssayLikeInputSchema'
import { EssayUncheckedCreateWithoutEssayLikeInputSchema } from './EssayUncheckedCreateWithoutEssayLikeInputSchema'
import { EssayCreateOrConnectWithoutEssayLikeInputSchema } from './EssayCreateOrConnectWithoutEssayLikeInputSchema'
import { EssayUpsertWithoutEssayLikeInputSchema } from './EssayUpsertWithoutEssayLikeInputSchema'
import { EssayWhereUniqueInputSchema } from './EssayWhereUniqueInputSchema'
import { EssayUpdateToOneWithWhereWithoutEssayLikeInputSchema } from './EssayUpdateToOneWithWhereWithoutEssayLikeInputSchema'
import { EssayUpdateWithoutEssayLikeInputSchema } from './EssayUpdateWithoutEssayLikeInputSchema'
import { EssayUncheckedUpdateWithoutEssayLikeInputSchema } from './EssayUncheckedUpdateWithoutEssayLikeInputSchema'

export const EssayUpdateOneRequiredWithoutEssayLikeNestedInputSchema: z.ZodType<Prisma.EssayUpdateOneRequiredWithoutEssayLikeNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => EssayCreateWithoutEssayLikeInputSchema),
					z.lazy(() => EssayUncheckedCreateWithoutEssayLikeInputSchema),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => EssayCreateOrConnectWithoutEssayLikeInputSchema)
				.optional(),
			upsert: z.lazy(() => EssayUpsertWithoutEssayLikeInputSchema).optional(),
			connect: z.lazy(() => EssayWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => EssayUpdateToOneWithWhereWithoutEssayLikeInputSchema),
					z.lazy(() => EssayUpdateWithoutEssayLikeInputSchema),
					z.lazy(() => EssayUncheckedUpdateWithoutEssayLikeInputSchema),
				])
				.optional(),
		})
		.strict()

export default EssayUpdateOneRequiredWithoutEssayLikeNestedInputSchema
