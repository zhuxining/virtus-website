import { z } from 'zod'
import type { Prisma } from '@/generated/prisma'
import { AnnouncementWhereInputSchema } from '../inputTypeSchemas/AnnouncementWhereInputSchema'
import { AnnouncementOrderByWithRelationInputSchema } from '../inputTypeSchemas/AnnouncementOrderByWithRelationInputSchema'
import { AnnouncementWhereUniqueInputSchema } from '../inputTypeSchemas/AnnouncementWhereUniqueInputSchema'

export const AnnouncementAggregateArgsSchema: z.ZodType<Prisma.AnnouncementAggregateArgs> =
	z
		.object({
			where: AnnouncementWhereInputSchema.optional(),
			orderBy: z
				.union([
					AnnouncementOrderByWithRelationInputSchema.array(),
					AnnouncementOrderByWithRelationInputSchema,
				])
				.optional(),
			cursor: AnnouncementWhereUniqueInputSchema.optional(),
			take: z.number().optional(),
			skip: z.number().optional(),
		})
		.strict()

export default AnnouncementAggregateArgsSchema
