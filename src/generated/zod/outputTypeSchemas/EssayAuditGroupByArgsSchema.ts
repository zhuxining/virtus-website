import { z } from 'zod'
import type { Prisma } from '@/generated/prisma'
import { EssayAuditWhereInputSchema } from '../inputTypeSchemas/EssayAuditWhereInputSchema'
import { EssayAuditOrderByWithAggregationInputSchema } from '../inputTypeSchemas/EssayAuditOrderByWithAggregationInputSchema'
import { EssayAuditScalarFieldEnumSchema } from '../inputTypeSchemas/EssayAuditScalarFieldEnumSchema'
import { EssayAuditScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/EssayAuditScalarWhereWithAggregatesInputSchema'

export const EssayAuditGroupByArgsSchema: z.ZodType<Prisma.EssayAuditGroupByArgs> =
	z
		.object({
			where: EssayAuditWhereInputSchema.optional(),
			orderBy: z
				.union([
					EssayAuditOrderByWithAggregationInputSchema.array(),
					EssayAuditOrderByWithAggregationInputSchema,
				])
				.optional(),
			by: EssayAuditScalarFieldEnumSchema.array(),
			having: EssayAuditScalarWhereWithAggregatesInputSchema.optional(),
			take: z.number().optional(),
			skip: z.number().optional(),
		})
		.strict()

export default EssayAuditGroupByArgsSchema
