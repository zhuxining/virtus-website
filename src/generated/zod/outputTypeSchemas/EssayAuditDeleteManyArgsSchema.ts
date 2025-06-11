import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { EssayAuditWhereInputSchema } from '../inputTypeSchemas/EssayAuditWhereInputSchema'

export const EssayAuditDeleteManyArgsSchema: z.ZodType<Prisma.EssayAuditDeleteManyArgs> =
	z
		.object({
			where: EssayAuditWhereInputSchema.optional(),
			limit: z.number().optional(),
		})
		.strict()

export default EssayAuditDeleteManyArgsSchema
