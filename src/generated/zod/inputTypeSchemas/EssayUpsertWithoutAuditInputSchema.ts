import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { EssayUpdateWithoutAuditInputSchema } from './EssayUpdateWithoutAuditInputSchema'
import { EssayUncheckedUpdateWithoutAuditInputSchema } from './EssayUncheckedUpdateWithoutAuditInputSchema'
import { EssayCreateWithoutAuditInputSchema } from './EssayCreateWithoutAuditInputSchema'
import { EssayUncheckedCreateWithoutAuditInputSchema } from './EssayUncheckedCreateWithoutAuditInputSchema'
import { EssayWhereInputSchema } from './EssayWhereInputSchema'

export const EssayUpsertWithoutAuditInputSchema: z.ZodType<Prisma.EssayUpsertWithoutAuditInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => EssayUpdateWithoutAuditInputSchema),
				z.lazy(() => EssayUncheckedUpdateWithoutAuditInputSchema),
			]),
			create: z.union([
				z.lazy(() => EssayCreateWithoutAuditInputSchema),
				z.lazy(() => EssayUncheckedCreateWithoutAuditInputSchema),
			]),
			where: z.lazy(() => EssayWhereInputSchema).optional(),
		})
		.strict()

export default EssayUpsertWithoutAuditInputSchema
