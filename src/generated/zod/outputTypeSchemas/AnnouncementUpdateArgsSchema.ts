import { z } from 'zod'
import type { Prisma } from '@/generated/prisma'
import { AnnouncementUpdateInputSchema } from '../inputTypeSchemas/AnnouncementUpdateInputSchema'
import { AnnouncementUncheckedUpdateInputSchema } from '../inputTypeSchemas/AnnouncementUncheckedUpdateInputSchema'
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

export const AnnouncementUpdateArgsSchema: z.ZodType<Prisma.AnnouncementUpdateArgs> =
	z
		.object({
			select: AnnouncementSelectSchema.optional(),
			data: z.union([
				AnnouncementUpdateInputSchema,
				AnnouncementUncheckedUpdateInputSchema,
			]),
			where: AnnouncementWhereUniqueInputSchema,
		})
		.strict()

export default AnnouncementUpdateArgsSchema
