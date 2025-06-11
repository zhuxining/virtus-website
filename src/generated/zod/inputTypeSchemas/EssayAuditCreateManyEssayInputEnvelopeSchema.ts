import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { EssayAuditCreateManyEssayInputSchema } from './EssayAuditCreateManyEssayInputSchema'

export const EssayAuditCreateManyEssayInputEnvelopeSchema: z.ZodType<Prisma.EssayAuditCreateManyEssayInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => EssayAuditCreateManyEssayInputSchema),
				z.lazy(() => EssayAuditCreateManyEssayInputSchema).array(),
			]),
		})
		.strict()

export default EssayAuditCreateManyEssayInputEnvelopeSchema
