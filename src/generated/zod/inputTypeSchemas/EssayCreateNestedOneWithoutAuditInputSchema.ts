import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { EssayCreateWithoutAuditInputSchema } from './EssayCreateWithoutAuditInputSchema'
import { EssayUncheckedCreateWithoutAuditInputSchema } from './EssayUncheckedCreateWithoutAuditInputSchema'
import { EssayCreateOrConnectWithoutAuditInputSchema } from './EssayCreateOrConnectWithoutAuditInputSchema'
import { EssayWhereUniqueInputSchema } from './EssayWhereUniqueInputSchema'

export const EssayCreateNestedOneWithoutAuditInputSchema: z.ZodType<Prisma.EssayCreateNestedOneWithoutAuditInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => EssayCreateWithoutAuditInputSchema),
					z.lazy(() => EssayUncheckedCreateWithoutAuditInputSchema),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => EssayCreateOrConnectWithoutAuditInputSchema)
				.optional(),
			connect: z.lazy(() => EssayWhereUniqueInputSchema).optional(),
		})
		.strict()

export default EssayCreateNestedOneWithoutAuditInputSchema
