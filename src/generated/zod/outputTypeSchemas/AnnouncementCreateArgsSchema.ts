import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { AnnouncementCreateInputSchema } from '../inputTypeSchemas/AnnouncementCreateInputSchema'
import { AnnouncementUncheckedCreateInputSchema } from '../inputTypeSchemas/AnnouncementUncheckedCreateInputSchema'
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

export const AnnouncementCreateArgsSchema: z.ZodType<Prisma.AnnouncementCreateArgs> =
	z
		.object({
			select: AnnouncementSelectSchema.optional(),
			data: z.union([
				AnnouncementCreateInputSchema,
				AnnouncementUncheckedCreateInputSchema,
			]),
		})
		.strict()

export default AnnouncementCreateArgsSchema
