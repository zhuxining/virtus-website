import { z } from 'zod'
import type { Prisma } from '@/generated/prisma'
import { EssayWhereInputSchema } from '../inputTypeSchemas/EssayWhereInputSchema'
import { EssayOrderByWithRelationInputSchema } from '../inputTypeSchemas/EssayOrderByWithRelationInputSchema'
import { EssayWhereUniqueInputSchema } from '../inputTypeSchemas/EssayWhereUniqueInputSchema'

export const EssayAggregateArgsSchema: z.ZodType<Prisma.EssayAggregateArgs> = z
	.object({
		where: EssayWhereInputSchema.optional(),
		orderBy: z
			.union([
				EssayOrderByWithRelationInputSchema.array(),
				EssayOrderByWithRelationInputSchema,
			])
			.optional(),
		cursor: EssayWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict()

export default EssayAggregateArgsSchema
