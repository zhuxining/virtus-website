import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { EssayAuditWhereInputSchema } from '../inputTypeSchemas/EssayAuditWhereInputSchema'
import { EssayAuditOrderByWithRelationInputSchema } from '../inputTypeSchemas/EssayAuditOrderByWithRelationInputSchema'
import { EssayAuditWhereUniqueInputSchema } from '../inputTypeSchemas/EssayAuditWhereUniqueInputSchema'

export const EssayAuditAggregateArgsSchema: z.ZodType<Prisma.EssayAuditAggregateArgs> =
	z
		.object({
			where: EssayAuditWhereInputSchema.optional(),
			orderBy: z
				.union([
					EssayAuditOrderByWithRelationInputSchema.array(),
					EssayAuditOrderByWithRelationInputSchema,
				])
				.optional(),
			cursor: EssayAuditWhereUniqueInputSchema.optional(),
			take: z.number().optional(),
			skip: z.number().optional(),
		})
		.strict()

export default EssayAuditAggregateArgsSchema
