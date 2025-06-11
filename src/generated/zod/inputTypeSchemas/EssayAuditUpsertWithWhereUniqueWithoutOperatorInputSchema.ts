import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { EssayAuditWhereUniqueInputSchema } from './EssayAuditWhereUniqueInputSchema'
import { EssayAuditUpdateWithoutOperatorInputSchema } from './EssayAuditUpdateWithoutOperatorInputSchema'
import { EssayAuditUncheckedUpdateWithoutOperatorInputSchema } from './EssayAuditUncheckedUpdateWithoutOperatorInputSchema'
import { EssayAuditCreateWithoutOperatorInputSchema } from './EssayAuditCreateWithoutOperatorInputSchema'
import { EssayAuditUncheckedCreateWithoutOperatorInputSchema } from './EssayAuditUncheckedCreateWithoutOperatorInputSchema'

export const EssayAuditUpsertWithWhereUniqueWithoutOperatorInputSchema: z.ZodType<Prisma.EssayAuditUpsertWithWhereUniqueWithoutOperatorInput> =
	z
		.object({
			where: z.lazy(() => EssayAuditWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => EssayAuditUpdateWithoutOperatorInputSchema),
				z.lazy(() => EssayAuditUncheckedUpdateWithoutOperatorInputSchema),
			]),
			create: z.union([
				z.lazy(() => EssayAuditCreateWithoutOperatorInputSchema),
				z.lazy(() => EssayAuditUncheckedCreateWithoutOperatorInputSchema),
			]),
		})
		.strict()

export default EssayAuditUpsertWithWhereUniqueWithoutOperatorInputSchema
