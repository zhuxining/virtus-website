import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { EssayAuditWhereUniqueInputSchema } from './EssayAuditWhereUniqueInputSchema'
import { EssayAuditUpdateWithoutEssayInputSchema } from './EssayAuditUpdateWithoutEssayInputSchema'
import { EssayAuditUncheckedUpdateWithoutEssayInputSchema } from './EssayAuditUncheckedUpdateWithoutEssayInputSchema'
import { EssayAuditCreateWithoutEssayInputSchema } from './EssayAuditCreateWithoutEssayInputSchema'
import { EssayAuditUncheckedCreateWithoutEssayInputSchema } from './EssayAuditUncheckedCreateWithoutEssayInputSchema'

export const EssayAuditUpsertWithWhereUniqueWithoutEssayInputSchema: z.ZodType<Prisma.EssayAuditUpsertWithWhereUniqueWithoutEssayInput> =
	z
		.object({
			where: z.lazy(() => EssayAuditWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => EssayAuditUpdateWithoutEssayInputSchema),
				z.lazy(() => EssayAuditUncheckedUpdateWithoutEssayInputSchema),
			]),
			create: z.union([
				z.lazy(() => EssayAuditCreateWithoutEssayInputSchema),
				z.lazy(() => EssayAuditUncheckedCreateWithoutEssayInputSchema),
			]),
		})
		.strict()

export default EssayAuditUpsertWithWhereUniqueWithoutEssayInputSchema
