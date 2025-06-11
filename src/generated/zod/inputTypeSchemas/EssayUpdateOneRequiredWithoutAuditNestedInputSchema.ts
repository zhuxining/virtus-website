import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { EssayCreateWithoutAuditInputSchema } from './EssayCreateWithoutAuditInputSchema'
import { EssayUncheckedCreateWithoutAuditInputSchema } from './EssayUncheckedCreateWithoutAuditInputSchema'
import { EssayCreateOrConnectWithoutAuditInputSchema } from './EssayCreateOrConnectWithoutAuditInputSchema'
import { EssayUpsertWithoutAuditInputSchema } from './EssayUpsertWithoutAuditInputSchema'
import { EssayWhereUniqueInputSchema } from './EssayWhereUniqueInputSchema'
import { EssayUpdateToOneWithWhereWithoutAuditInputSchema } from './EssayUpdateToOneWithWhereWithoutAuditInputSchema'
import { EssayUpdateWithoutAuditInputSchema } from './EssayUpdateWithoutAuditInputSchema'
import { EssayUncheckedUpdateWithoutAuditInputSchema } from './EssayUncheckedUpdateWithoutAuditInputSchema'

export const EssayUpdateOneRequiredWithoutAuditNestedInputSchema: z.ZodType<Prisma.EssayUpdateOneRequiredWithoutAuditNestedInput> =
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
			upsert: z.lazy(() => EssayUpsertWithoutAuditInputSchema).optional(),
			connect: z.lazy(() => EssayWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => EssayUpdateToOneWithWhereWithoutAuditInputSchema),
					z.lazy(() => EssayUpdateWithoutAuditInputSchema),
					z.lazy(() => EssayUncheckedUpdateWithoutAuditInputSchema),
				])
				.optional(),
		})
		.strict()

export default EssayUpdateOneRequiredWithoutAuditNestedInputSchema
