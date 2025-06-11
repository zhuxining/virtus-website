import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { EssayLikeCreateManyOperatorInputSchema } from './EssayLikeCreateManyOperatorInputSchema'

export const EssayLikeCreateManyOperatorInputEnvelopeSchema: z.ZodType<Prisma.EssayLikeCreateManyOperatorInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => EssayLikeCreateManyOperatorInputSchema),
				z.lazy(() => EssayLikeCreateManyOperatorInputSchema).array(),
			]),
		})
		.strict()

export default EssayLikeCreateManyOperatorInputEnvelopeSchema
