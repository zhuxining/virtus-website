import { z } from 'zod'
import type { Prisma } from '@/generated/prisma'
import { EventHistoryIncludeSchema } from '../inputTypeSchemas/EventHistoryIncludeSchema'
import { EventHistoryUpdateInputSchema } from '../inputTypeSchemas/EventHistoryUpdateInputSchema'
import { EventHistoryUncheckedUpdateInputSchema } from '../inputTypeSchemas/EventHistoryUncheckedUpdateInputSchema'
import { EventHistoryWhereUniqueInputSchema } from '../inputTypeSchemas/EventHistoryWhereUniqueInputSchema'
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

export const EventHistoryUpdateArgsSchema: z.ZodType<Prisma.EventHistoryUpdateArgs> =
	z
		.object({
			select: EventHistorySelectSchema.optional(),
			include: z.lazy(() => EventHistoryIncludeSchema).optional(),
			data: z.union([
				EventHistoryUpdateInputSchema,
				EventHistoryUncheckedUpdateInputSchema,
			]),
			where: EventHistoryWhereUniqueInputSchema,
		})
		.strict()

export default EventHistoryUpdateArgsSchema
