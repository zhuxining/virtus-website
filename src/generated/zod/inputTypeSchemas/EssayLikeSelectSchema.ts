import { z } from 'zod'
import type { Prisma } from '@/generated/prisma'
import { EssayArgsSchema } from '../outputTypeSchemas/EssayArgsSchema'
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema'

export const EssayLikeSelectSchema: z.ZodType<Prisma.EssayLikeSelect> = z
	.object({
		id: z.boolean().optional(),
		essayId: z.boolean().optional(),
		operatorId: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		essay: z.union([z.boolean(), z.lazy(() => EssayArgsSchema)]).optional(),
		operator: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
	})
	.strict()

export default EssayLikeSelectSchema
