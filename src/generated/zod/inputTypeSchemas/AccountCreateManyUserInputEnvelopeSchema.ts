import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { AccountCreateManyUserInputSchema } from './AccountCreateManyUserInputSchema'

export const AccountCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.AccountCreateManyUserInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => AccountCreateManyUserInputSchema),
				z.lazy(() => AccountCreateManyUserInputSchema).array(),
			]),
		})
		.strict()

export default AccountCreateManyUserInputEnvelopeSchema
