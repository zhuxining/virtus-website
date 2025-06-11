import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { EssayLikeCreateManyEssayInputSchema } from './EssayLikeCreateManyEssayInputSchema'

export const EssayLikeCreateManyEssayInputEnvelopeSchema: z.ZodType<Prisma.EssayLikeCreateManyEssayInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => EssayLikeCreateManyEssayInputSchema),
				z.lazy(() => EssayLikeCreateManyEssayInputSchema).array(),
			]),
		})
		.strict()

export default EssayLikeCreateManyEssayInputEnvelopeSchema
