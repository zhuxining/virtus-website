import { z } from 'zod'
import type { Prisma } from '@/generated/prisma'
import { EssayLikeSelectSchema } from '../inputTypeSchemas/EssayLikeSelectSchema'
import { EssayLikeIncludeSchema } from '../inputTypeSchemas/EssayLikeIncludeSchema'

export const EssayLikeArgsSchema: z.ZodType<Prisma.EssayLikeDefaultArgs> = z
	.object({
		select: z.lazy(() => EssayLikeSelectSchema).optional(),
		include: z.lazy(() => EssayLikeIncludeSchema).optional(),
	})
	.strict()

export default EssayLikeArgsSchema
