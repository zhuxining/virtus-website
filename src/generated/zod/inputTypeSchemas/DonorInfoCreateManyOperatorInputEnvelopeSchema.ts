import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { DonorInfoCreateManyOperatorInputSchema } from './DonorInfoCreateManyOperatorInputSchema'

export const DonorInfoCreateManyOperatorInputEnvelopeSchema: z.ZodType<Prisma.DonorInfoCreateManyOperatorInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => DonorInfoCreateManyOperatorInputSchema),
				z.lazy(() => DonorInfoCreateManyOperatorInputSchema).array(),
			]),
		})
		.strict()

export default DonorInfoCreateManyOperatorInputEnvelopeSchema
