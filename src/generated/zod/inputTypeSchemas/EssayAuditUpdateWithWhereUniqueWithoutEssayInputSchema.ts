import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { EssayAuditWhereUniqueInputSchema } from './EssayAuditWhereUniqueInputSchema'
import { EssayAuditUpdateWithoutEssayInputSchema } from './EssayAuditUpdateWithoutEssayInputSchema'
import { EssayAuditUncheckedUpdateWithoutEssayInputSchema } from './EssayAuditUncheckedUpdateWithoutEssayInputSchema'

export const EssayAuditUpdateWithWhereUniqueWithoutEssayInputSchema: z.ZodType<Prisma.EssayAuditUpdateWithWhereUniqueWithoutEssayInput> =
	z
		.object({
			where: z.lazy(() => EssayAuditWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => EssayAuditUpdateWithoutEssayInputSchema),
				z.lazy(() => EssayAuditUncheckedUpdateWithoutEssayInputSchema),
			]),
		})
		.strict()

export default EssayAuditUpdateWithWhereUniqueWithoutEssayInputSchema
