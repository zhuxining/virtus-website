import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { EventHistoryIncludeSchema } from '../inputTypeSchemas/EventHistoryIncludeSchema'
import { EventHistoryWhereUniqueInputSchema } from '../inputTypeSchemas/EventHistoryWhereUniqueInputSchema'
import { EventHistoryCreateInputSchema } from '../inputTypeSchemas/EventHistoryCreateInputSchema'
import { EventHistoryUncheckedCreateInputSchema } from '../inputTypeSchemas/EventHistoryUncheckedCreateInputSchema'
import { EventHistoryUpdateInputSchema } from '../inputTypeSchemas/EventHistoryUpdateInputSchema'
import { EventHistoryUncheckedUpdateInputSchema } from '../inputTypeSchemas/EventHistoryUncheckedUpdateInputSchema'
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EventHistorySelectSchema: z.ZodType<Prisma.EventHistorySelect> = z
	.object({
		id: z.boolean().optional(),
		title: z.boolean().optional(),
		description: z.boolean().optional(),
		content: z.boolean().optional(),
		banner: z.boolean().optional(),
		operatorId: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		operator: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
	})
	.strict()

export const EventHistoryUpsertArgsSchema: z.ZodType<Prisma.EventHistoryUpsertArgs> =
	z
		.object({
			select: EventHistorySelectSchema.optional(),
			include: z.lazy(() => EventHistoryIncludeSchema).optional(),
			where: EventHistoryWhereUniqueInputSchema,
			create: z.union([
				EventHistoryCreateInputSchema,
				EventHistoryUncheckedCreateInputSchema,
			]),
			update: z.union([
				EventHistoryUpdateInputSchema,
				EventHistoryUncheckedUpdateInputSchema,
			]),
		})
		.strict()

export default EventHistoryUpsertArgsSchema
