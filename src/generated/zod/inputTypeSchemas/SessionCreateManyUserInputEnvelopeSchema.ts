import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { SessionCreateManyUserInputSchema } from './SessionCreateManyUserInputSchema'

export const SessionCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.SessionCreateManyUserInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => SessionCreateManyUserInputSchema),
				z.lazy(() => SessionCreateManyUserInputSchema).array(),
			]),
		})
		.strict()

export default SessionCreateManyUserInputEnvelopeSchema
