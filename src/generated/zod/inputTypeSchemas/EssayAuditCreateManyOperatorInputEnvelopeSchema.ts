import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { EssayAuditCreateManyOperatorInputSchema } from './EssayAuditCreateManyOperatorInputSchema'

export const EssayAuditCreateManyOperatorInputEnvelopeSchema: z.ZodType<Prisma.EssayAuditCreateManyOperatorInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => EssayAuditCreateManyOperatorInputSchema),
				z.lazy(() => EssayAuditCreateManyOperatorInputSchema).array(),
			]),
		})
		.strict()

export default EssayAuditCreateManyOperatorInputEnvelopeSchema
