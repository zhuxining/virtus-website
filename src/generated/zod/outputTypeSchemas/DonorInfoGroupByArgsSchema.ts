import { z } from 'zod'
import type { Prisma } from '@/generated/prisma'
import { DonorInfoWhereInputSchema } from '../inputTypeSchemas/DonorInfoWhereInputSchema'
import { DonorInfoOrderByWithAggregationInputSchema } from '../inputTypeSchemas/DonorInfoOrderByWithAggregationInputSchema'
import { DonorInfoScalarFieldEnumSchema } from '../inputTypeSchemas/DonorInfoScalarFieldEnumSchema'
import { DonorInfoScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/DonorInfoScalarWhereWithAggregatesInputSchema'

export const DonorInfoGroupByArgsSchema: z.ZodType<Prisma.DonorInfoGroupByArgs> =
	z
		.object({
			where: DonorInfoWhereInputSchema.optional(),
			orderBy: z
				.union([
					DonorInfoOrderByWithAggregationInputSchema.array(),
					DonorInfoOrderByWithAggregationInputSchema,
				])
				.optional(),
			by: DonorInfoScalarFieldEnumSchema.array(),
			having: DonorInfoScalarWhereWithAggregatesInputSchema.optional(),
			take: z.number().optional(),
			skip: z.number().optional(),
		})
		.strict()

export default DonorInfoGroupByArgsSchema
