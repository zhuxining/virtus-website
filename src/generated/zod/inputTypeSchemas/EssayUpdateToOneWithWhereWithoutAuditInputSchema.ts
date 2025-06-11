import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { EssayWhereInputSchema } from './EssayWhereInputSchema'
import { EssayUpdateWithoutAuditInputSchema } from './EssayUpdateWithoutAuditInputSchema'
import { EssayUncheckedUpdateWithoutAuditInputSchema } from './EssayUncheckedUpdateWithoutAuditInputSchema'

export const EssayUpdateToOneWithWhereWithoutAuditInputSchema: z.ZodType<Prisma.EssayUpdateToOneWithWhereWithoutAuditInput> =
	z
		.object({
			where: z.lazy(() => EssayWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => EssayUpdateWithoutAuditInputSchema),
				z.lazy(() => EssayUncheckedUpdateWithoutAuditInputSchema),
			]),
		})
		.strict()

export default EssayUpdateToOneWithWhereWithoutAuditInputSchema
