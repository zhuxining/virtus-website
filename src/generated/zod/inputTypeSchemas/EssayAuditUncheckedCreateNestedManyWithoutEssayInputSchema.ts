import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { EssayAuditCreateWithoutEssayInputSchema } from './EssayAuditCreateWithoutEssayInputSchema'
import { EssayAuditUncheckedCreateWithoutEssayInputSchema } from './EssayAuditUncheckedCreateWithoutEssayInputSchema'
import { EssayAuditCreateOrConnectWithoutEssayInputSchema } from './EssayAuditCreateOrConnectWithoutEssayInputSchema'
import { EssayAuditCreateManyEssayInputEnvelopeSchema } from './EssayAuditCreateManyEssayInputEnvelopeSchema'
import { EssayAuditWhereUniqueInputSchema } from './EssayAuditWhereUniqueInputSchema'

export const EssayAuditUncheckedCreateNestedManyWithoutEssayInputSchema: z.ZodType<Prisma.EssayAuditUncheckedCreateNestedManyWithoutEssayInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => EssayAuditCreateWithoutEssayInputSchema),
					z.lazy(() => EssayAuditCreateWithoutEssayInputSchema).array(),
					z.lazy(() => EssayAuditUncheckedCreateWithoutEssayInputSchema),
					z
						.lazy(() => EssayAuditUncheckedCreateWithoutEssayInputSchema)
						.array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => EssayAuditCreateOrConnectWithoutEssayInputSchema),
					z
						.lazy(() => EssayAuditCreateOrConnectWithoutEssayInputSchema)
						.array(),
				])
				.optional(),
			createMany: z
				.lazy(() => EssayAuditCreateManyEssayInputEnvelopeSchema)
				.optional(),
			connect: z
				.union([
					z.lazy(() => EssayAuditWhereUniqueInputSchema),
					z.lazy(() => EssayAuditWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict()

export default EssayAuditUncheckedCreateNestedManyWithoutEssayInputSchema
