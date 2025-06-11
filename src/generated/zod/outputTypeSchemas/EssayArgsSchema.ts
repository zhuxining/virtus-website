import { z } from 'zod'
import type { Prisma } from '@/generated/prisma'
import { EssaySelectSchema } from '../inputTypeSchemas/EssaySelectSchema'
import { EssayIncludeSchema } from '../inputTypeSchemas/EssayIncludeSchema'

export const EssayArgsSchema: z.ZodType<Prisma.EssayDefaultArgs> = z
	.object({
		select: z.lazy(() => EssaySelectSchema).optional(),
		include: z.lazy(() => EssayIncludeSchema).optional(),
	})
	.strict()

export default EssayArgsSchema
