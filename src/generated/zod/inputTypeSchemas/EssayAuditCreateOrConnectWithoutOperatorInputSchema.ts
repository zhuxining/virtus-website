import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { EssayAuditWhereUniqueInputSchema } from './EssayAuditWhereUniqueInputSchema'
import { EssayAuditCreateWithoutOperatorInputSchema } from './EssayAuditCreateWithoutOperatorInputSchema'
import { EssayAuditUncheckedCreateWithoutOperatorInputSchema } from './EssayAuditUncheckedCreateWithoutOperatorInputSchema'

export const EssayAuditCreateOrConnectWithoutOperatorInputSchema: z.ZodType<Prisma.EssayAuditCreateOrConnectWithoutOperatorInput> =
	z
		.object({
			where: z.lazy(() => EssayAuditWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => EssayAuditCreateWithoutOperatorInputSchema),
				z.lazy(() => EssayAuditUncheckedCreateWithoutOperatorInputSchema),
			]),
		})
		.strict()

export default EssayAuditCreateOrConnectWithoutOperatorInputSchema
