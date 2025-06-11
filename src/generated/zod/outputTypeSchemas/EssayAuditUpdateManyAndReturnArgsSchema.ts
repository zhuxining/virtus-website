import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { EssayAuditUpdateManyMutationInputSchema } from '../inputTypeSchemas/EssayAuditUpdateManyMutationInputSchema'
import { EssayAuditUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/EssayAuditUncheckedUpdateManyInputSchema'
import { EssayAuditWhereInputSchema } from '../inputTypeSchemas/EssayAuditWhereInputSchema'

export const EssayAuditUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.EssayAuditUpdateManyAndReturnArgs> =
	z
		.object({
			data: z.union([
				EssayAuditUpdateManyMutationInputSchema,
				EssayAuditUncheckedUpdateManyInputSchema,
			]),
			where: EssayAuditWhereInputSchema.optional(),
			limit: z.number().optional(),
		})
		.strict()

export default EssayAuditUpdateManyAndReturnArgsSchema
