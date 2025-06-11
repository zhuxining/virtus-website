import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { EssayAuditScalarWhereInputSchema } from './EssayAuditScalarWhereInputSchema'
import { EssayAuditUpdateManyMutationInputSchema } from './EssayAuditUpdateManyMutationInputSchema'
import { EssayAuditUncheckedUpdateManyWithoutOperatorInputSchema } from './EssayAuditUncheckedUpdateManyWithoutOperatorInputSchema'

export const EssayAuditUpdateManyWithWhereWithoutOperatorInputSchema: z.ZodType<Prisma.EssayAuditUpdateManyWithWhereWithoutOperatorInput> =
	z
		.object({
			where: z.lazy(() => EssayAuditScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => EssayAuditUpdateManyMutationInputSchema),
				z.lazy(() => EssayAuditUncheckedUpdateManyWithoutOperatorInputSchema),
			]),
		})
		.strict()

export default EssayAuditUpdateManyWithWhereWithoutOperatorInputSchema
