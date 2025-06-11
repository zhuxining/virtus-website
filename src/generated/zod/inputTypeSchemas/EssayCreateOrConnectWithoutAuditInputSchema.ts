import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { EssayWhereUniqueInputSchema } from './EssayWhereUniqueInputSchema'
import { EssayCreateWithoutAuditInputSchema } from './EssayCreateWithoutAuditInputSchema'
import { EssayUncheckedCreateWithoutAuditInputSchema } from './EssayUncheckedCreateWithoutAuditInputSchema'

export const EssayCreateOrConnectWithoutAuditInputSchema: z.ZodType<Prisma.EssayCreateOrConnectWithoutAuditInput> =
	z
		.object({
			where: z.lazy(() => EssayWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => EssayCreateWithoutAuditInputSchema),
				z.lazy(() => EssayUncheckedCreateWithoutAuditInputSchema),
			]),
		})
		.strict()

export default EssayCreateOrConnectWithoutAuditInputSchema
