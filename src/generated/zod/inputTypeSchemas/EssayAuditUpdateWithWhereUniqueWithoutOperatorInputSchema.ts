import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { EssayAuditWhereUniqueInputSchema } from './EssayAuditWhereUniqueInputSchema'
import { EssayAuditUpdateWithoutOperatorInputSchema } from './EssayAuditUpdateWithoutOperatorInputSchema'
import { EssayAuditUncheckedUpdateWithoutOperatorInputSchema } from './EssayAuditUncheckedUpdateWithoutOperatorInputSchema'

export const EssayAuditUpdateWithWhereUniqueWithoutOperatorInputSchema: z.ZodType<Prisma.EssayAuditUpdateWithWhereUniqueWithoutOperatorInput> =
	z
		.object({
			where: z.lazy(() => EssayAuditWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => EssayAuditUpdateWithoutOperatorInputSchema),
				z.lazy(() => EssayAuditUncheckedUpdateWithoutOperatorInputSchema),
			]),
		})
		.strict()

export default EssayAuditUpdateWithWhereUniqueWithoutOperatorInputSchema
