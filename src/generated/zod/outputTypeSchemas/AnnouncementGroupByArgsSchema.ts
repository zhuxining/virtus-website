import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { AnnouncementWhereInputSchema } from '../inputTypeSchemas/AnnouncementWhereInputSchema'
import { AnnouncementOrderByWithAggregationInputSchema } from '../inputTypeSchemas/AnnouncementOrderByWithAggregationInputSchema'
import { AnnouncementScalarFieldEnumSchema } from '../inputTypeSchemas/AnnouncementScalarFieldEnumSchema'
import { AnnouncementScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/AnnouncementScalarWhereWithAggregatesInputSchema'

export const AnnouncementGroupByArgsSchema: z.ZodType<Prisma.AnnouncementGroupByArgs> =
	z
		.object({
			where: AnnouncementWhereInputSchema.optional(),
			orderBy: z
				.union([
					AnnouncementOrderByWithAggregationInputSchema.array(),
					AnnouncementOrderByWithAggregationInputSchema,
				])
				.optional(),
			by: AnnouncementScalarFieldEnumSchema.array(),
			having: AnnouncementScalarWhereWithAggregatesInputSchema.optional(),
			take: z.number().optional(),
			skip: z.number().optional(),
		})
		.strict()

export default AnnouncementGroupByArgsSchema
