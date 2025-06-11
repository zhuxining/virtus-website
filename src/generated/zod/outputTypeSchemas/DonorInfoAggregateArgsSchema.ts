import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { DonorInfoWhereInputSchema } from '../inputTypeSchemas/DonorInfoWhereInputSchema'
import { DonorInfoOrderByWithRelationInputSchema } from '../inputTypeSchemas/DonorInfoOrderByWithRelationInputSchema'
import { DonorInfoWhereUniqueInputSchema } from '../inputTypeSchemas/DonorInfoWhereUniqueInputSchema'

export const DonorInfoAggregateArgsSchema: z.ZodType<Prisma.DonorInfoAggregateArgs> =
	z
		.object({
			where: DonorInfoWhereInputSchema.optional(),
			orderBy: z
				.union([
					DonorInfoOrderByWithRelationInputSchema.array(),
					DonorInfoOrderByWithRelationInputSchema,
				])
				.optional(),
			cursor: DonorInfoWhereUniqueInputSchema.optional(),
			take: z.number().optional(),
			skip: z.number().optional(),
		})
		.strict()

export default DonorInfoAggregateArgsSchema
