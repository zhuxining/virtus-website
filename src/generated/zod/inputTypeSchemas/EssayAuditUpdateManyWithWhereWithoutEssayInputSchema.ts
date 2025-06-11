import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { EssayAuditScalarWhereInputSchema } from './EssayAuditScalarWhereInputSchema'
import { EssayAuditUpdateManyMutationInputSchema } from './EssayAuditUpdateManyMutationInputSchema'
import { EssayAuditUncheckedUpdateManyWithoutEssayInputSchema } from './EssayAuditUncheckedUpdateManyWithoutEssayInputSchema'

export const EssayAuditUpdateManyWithWhereWithoutEssayInputSchema: z.ZodType<Prisma.EssayAuditUpdateManyWithWhereWithoutEssayInput> =
	z
		.object({
			where: z.lazy(() => EssayAuditScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => EssayAuditUpdateManyMutationInputSchema),
				z.lazy(() => EssayAuditUncheckedUpdateManyWithoutEssayInputSchema),
			]),
		})
		.strict()

export default EssayAuditUpdateManyWithWhereWithoutEssayInputSchema
