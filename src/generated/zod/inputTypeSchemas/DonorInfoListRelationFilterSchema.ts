import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { DonorInfoWhereInputSchema } from './DonorInfoWhereInputSchema'

export const DonorInfoListRelationFilterSchema: z.ZodType<Prisma.DonorInfoListRelationFilter> =
	z
		.object({
			every: z.lazy(() => DonorInfoWhereInputSchema).optional(),
			some: z.lazy(() => DonorInfoWhereInputSchema).optional(),
			none: z.lazy(() => DonorInfoWhereInputSchema).optional(),
		})
		.strict()

export default DonorInfoListRelationFilterSchema
