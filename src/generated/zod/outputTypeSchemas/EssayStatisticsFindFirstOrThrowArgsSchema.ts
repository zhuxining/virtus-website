import { z } from 'zod'
import type { Prisma } from '@/generated/prisma'
import { EssayStatisticsWhereInputSchema } from '../inputTypeSchemas/EssayStatisticsWhereInputSchema'
import { EssayStatisticsOrderByWithRelationInputSchema } from '../inputTypeSchemas/EssayStatisticsOrderByWithRelationInputSchema'
import { EssayStatisticsWhereUniqueInputSchema } from '../inputTypeSchemas/EssayStatisticsWhereUniqueInputSchema'
import { EssayStatisticsScalarFieldEnumSchema } from '../inputTypeSchemas/EssayStatisticsScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EssayStatisticsSelectSchema: z.ZodType<Prisma.EssayStatisticsSelect> =
	z
		.object({
			id: z.boolean().optional(),
			createdAt: z.boolean().optional(),
			updatedAt: z.boolean().optional(),
		})
		.strict()

export const EssayStatisticsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.EssayStatisticsFindFirstOrThrowArgs> =
	z
		.object({
			select: EssayStatisticsSelectSchema.optional(),
			where: EssayStatisticsWhereInputSchema.optional(),
			orderBy: z
				.union([
					EssayStatisticsOrderByWithRelationInputSchema.array(),
					EssayStatisticsOrderByWithRelationInputSchema,
				])
				.optional(),
			cursor: EssayStatisticsWhereUniqueInputSchema.optional(),
			take: z.number().optional(),
			skip: z.number().optional(),
			distinct: z
				.union([
					EssayStatisticsScalarFieldEnumSchema,
					EssayStatisticsScalarFieldEnumSchema.array(),
				])
				.optional(),
		})
		.strict()

export default EssayStatisticsFindFirstOrThrowArgsSchema
