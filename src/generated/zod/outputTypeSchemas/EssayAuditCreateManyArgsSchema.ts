import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { EssayAuditCreateManyInputSchema } from '../inputTypeSchemas/EssayAuditCreateManyInputSchema'

export const EssayAuditCreateManyArgsSchema: z.ZodType<Prisma.EssayAuditCreateManyArgs> =
	z
		.object({
			data: z.union([
				EssayAuditCreateManyInputSchema,
				EssayAuditCreateManyInputSchema.array(),
			]),
		})
		.strict()

export default EssayAuditCreateManyArgsSchema
