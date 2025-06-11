import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { AnnouncementWhereUniqueInputSchema } from '../inputTypeSchemas/AnnouncementWhereUniqueInputSchema'
import { AnnouncementCreateInputSchema } from '../inputTypeSchemas/AnnouncementCreateInputSchema'
import { AnnouncementUncheckedCreateInputSchema } from '../inputTypeSchemas/AnnouncementUncheckedCreateInputSchema'
import { AnnouncementUpdateInputSchema } from '../inputTypeSchemas/AnnouncementUpdateInputSchema'
import { AnnouncementUncheckedUpdateInputSchema } from '../inputTypeSchemas/AnnouncementUncheckedUpdateInputSchema'
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

export const AnnouncementUpsertArgsSchema: z.ZodType<Prisma.AnnouncementUpsertArgs> =
	z
		.object({
			select: AnnouncementSelectSchema.optional(),
			where: AnnouncementWhereUniqueInputSchema,
			create: z.union([
				AnnouncementCreateInputSchema,
				AnnouncementUncheckedCreateInputSchema,
			]),
			update: z.union([
				AnnouncementUpdateInputSchema,
				AnnouncementUncheckedUpdateInputSchema,
			]),
		})
		.strict()

export default AnnouncementUpsertArgsSchema
