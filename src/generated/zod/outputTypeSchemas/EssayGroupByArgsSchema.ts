import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { EssayWhereInputSchema } from '../inputTypeSchemas/EssayWhereInputSchema'
import { EssayOrderByWithAggregationInputSchema } from '../inputTypeSchemas/EssayOrderByWithAggregationInputSchema'
import { EssayScalarFieldEnumSchema } from '../inputTypeSchemas/EssayScalarFieldEnumSchema'
import { EssayScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/EssayScalarWhereWithAggregatesInputSchema'

export const EssayGroupByArgsSchema: z.ZodType<Prisma.EssayGroupByArgs> = z
	.object({
		where: EssayWhereInputSchema.optional(),
		orderBy: z
			.union([
				EssayOrderByWithAggregationInputSchema.array(),
				EssayOrderByWithAggregationInputSchema,
			])
			.optional(),
		by: EssayScalarFieldEnumSchema.array(),
		having: EssayScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict()

export default EssayGroupByArgsSchema
