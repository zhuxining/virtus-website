import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { EssayCreateManyAuthorInputSchema } from './EssayCreateManyAuthorInputSchema'

export const EssayCreateManyAuthorInputEnvelopeSchema: z.ZodType<Prisma.EssayCreateManyAuthorInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => EssayCreateManyAuthorInputSchema),
				z.lazy(() => EssayCreateManyAuthorInputSchema).array(),
			]),
		})
		.strict()

export default EssayCreateManyAuthorInputEnvelopeSchema
