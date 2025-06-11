import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { AnnouncementWhereUniqueInputSchema } from '../inputTypeSchemas/AnnouncementWhereUniqueInputSchema'
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

export const AnnouncementFindUniqueArgsSchema: z.ZodType<Prisma.AnnouncementFindUniqueArgs> =
	z
		.object({
			select: AnnouncementSelectSchema.optional(),
			where: AnnouncementWhereUniqueInputSchema,
		})
		.strict()

export default AnnouncementFindUniqueArgsSchema
