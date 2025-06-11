import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { EssayArgsSchema } from '../outputTypeSchemas/EssayArgsSchema'
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema'

export const EssayLikeIncludeSchema: z.ZodType<Prisma.EssayLikeInclude> = z
	.object({
		essay: z.union([z.boolean(), z.lazy(() => EssayArgsSchema)]).optional(),
		operator: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
	})
	.strict()

export default EssayLikeIncludeSchema
