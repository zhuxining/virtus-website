import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { SessionWhereUniqueInputSchema } from './SessionWhereUniqueInputSchema'
import { SessionCreateWithoutUserInputSchema } from './SessionCreateWithoutUserInputSchema'
import { SessionUncheckedCreateWithoutUserInputSchema } from './SessionUncheckedCreateWithoutUserInputSchema'

export const SessionCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateOrConnectWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => SessionWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => SessionCreateWithoutUserInputSchema),
				z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),
			]),
		})
		.strict()

export default SessionCreateOrConnectWithoutUserInputSchema
