import { z } from 'zod'
import type { Prisma } from '@/generated/prisma'
import { EssayAuditCreateManyInputSchema } from '../inputTypeSchemas/EssayAuditCreateManyInputSchema'

export const EssayAuditCreateManyAndReturnArgsSchema: z.ZodType<Prisma.EssayAuditCreateManyAndReturnArgs> =
	z
		.object({
			data: z.union([
				EssayAuditCreateManyInputSchema,
				EssayAuditCreateManyInputSchema.array(),
			]),
		})
		.strict()

export default EssayAuditCreateManyAndReturnArgsSchema
