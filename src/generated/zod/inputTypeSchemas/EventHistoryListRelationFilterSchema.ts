import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { EventHistoryWhereInputSchema } from './EventHistoryWhereInputSchema'

export const EventHistoryListRelationFilterSchema: z.ZodType<Prisma.EventHistoryListRelationFilter> =
	z
		.object({
			every: z.lazy(() => EventHistoryWhereInputSchema).optional(),
			some: z.lazy(() => EventHistoryWhereInputSchema).optional(),
			none: z.lazy(() => EventHistoryWhereInputSchema).optional(),
		})
		.strict()

export default EventHistoryListRelationFilterSchema
