import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { EssayAuditCreateWithoutOperatorInputSchema } from './EssayAuditCreateWithoutOperatorInputSchema'
import { EssayAuditUncheckedCreateWithoutOperatorInputSchema } from './EssayAuditUncheckedCreateWithoutOperatorInputSchema'
import { EssayAuditCreateOrConnectWithoutOperatorInputSchema } from './EssayAuditCreateOrConnectWithoutOperatorInputSchema'
import { EssayAuditCreateManyOperatorInputEnvelopeSchema } from './EssayAuditCreateManyOperatorInputEnvelopeSchema'
import { EssayAuditWhereUniqueInputSchema } from './EssayAuditWhereUniqueInputSchema'

export const EssayAuditCreateNestedManyWithoutOperatorInputSchema: z.ZodType<Prisma.EssayAuditCreateNestedManyWithoutOperatorInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => EssayAuditCreateWithoutOperatorInputSchema),
					z.lazy(() => EssayAuditCreateWithoutOperatorInputSchema).array(),
					z.lazy(() => EssayAuditUncheckedCreateWithoutOperatorInputSchema),
					z
						.lazy(() => EssayAuditUncheckedCreateWithoutOperatorInputSchema)
						.array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => EssayAuditCreateOrConnectWithoutOperatorInputSchema),
					z
						.lazy(() => EssayAuditCreateOrConnectWithoutOperatorInputSchema)
						.array(),
				])
				.optional(),
			createMany: z
				.lazy(() => EssayAuditCreateManyOperatorInputEnvelopeSchema)
				.optional(),
			connect: z
				.union([
					z.lazy(() => EssayAuditWhereUniqueInputSchema),
					z.lazy(() => EssayAuditWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict()

export default EssayAuditCreateNestedManyWithoutOperatorInputSchema
