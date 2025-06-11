import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { EssayAuditWhereUniqueInputSchema } from './EssayAuditWhereUniqueInputSchema'
import { EssayAuditCreateWithoutEssayInputSchema } from './EssayAuditCreateWithoutEssayInputSchema'
import { EssayAuditUncheckedCreateWithoutEssayInputSchema } from './EssayAuditUncheckedCreateWithoutEssayInputSchema'

export const EssayAuditCreateOrConnectWithoutEssayInputSchema: z.ZodType<Prisma.EssayAuditCreateOrConnectWithoutEssayInput> =
	z
		.object({
			where: z.lazy(() => EssayAuditWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => EssayAuditCreateWithoutEssayInputSchema),
				z.lazy(() => EssayAuditUncheckedCreateWithoutEssayInputSchema),
			]),
		})
		.strict()

export default EssayAuditCreateOrConnectWithoutEssayInputSchema
