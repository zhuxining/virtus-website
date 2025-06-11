import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { AnnouncementWhereInputSchema } from '../inputTypeSchemas/AnnouncementWhereInputSchema'
import { AnnouncementOrderByWithRelationInputSchema } from '../inputTypeSchemas/AnnouncementOrderByWithRelationInputSchema'
import { AnnouncementWhereUniqueInputSchema } from '../inputTypeSchemas/AnnouncementWhereUniqueInputSchema'
import { AnnouncementScalarFieldEnumSchema } from '../inputTypeSchemas/AnnouncementScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AnnouncementSelectSchema: z.ZodType<Prisma.AnnouncementSelect> = z
	.object({
		id: z.boolean().optional(),
		content: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
	})
	.strict()

export const AnnouncementFindManyArgsSchema: z.ZodType<Prisma.AnnouncementFindManyArgs> =
	z
		.object({
			select: AnnouncementSelectSchema.optional(),
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
			distinct: z
				.union([
					AnnouncementScalarFieldEnumSchema,
					AnnouncementScalarFieldEnumSchema.array(),
				])
				.optional(),
		})
		.strict()

export default AnnouncementFindManyArgsSchema
