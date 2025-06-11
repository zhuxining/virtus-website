import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { EventHistorySelectSchema } from '../inputTypeSchemas/EventHistorySelectSchema'
import { EventHistoryIncludeSchema } from '../inputTypeSchemas/EventHistoryIncludeSchema'

export const EventHistoryArgsSchema: z.ZodType<Prisma.EventHistoryDefaultArgs> =
	z
		.object({
			select: z.lazy(() => EventHistorySelectSchema).optional(),
			include: z.lazy(() => EventHistoryIncludeSchema).optional(),
		})
		.strict()

export default EventHistoryArgsSchema
