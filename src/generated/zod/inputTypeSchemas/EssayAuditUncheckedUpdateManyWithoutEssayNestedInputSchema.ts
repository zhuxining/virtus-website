import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { EssayAuditCreateWithoutEssayInputSchema } from './EssayAuditCreateWithoutEssayInputSchema'
import { EssayAuditUncheckedCreateWithoutEssayInputSchema } from './EssayAuditUncheckedCreateWithoutEssayInputSchema'
import { EssayAuditCreateOrConnectWithoutEssayInputSchema } from './EssayAuditCreateOrConnectWithoutEssayInputSchema'
import { EssayAuditUpsertWithWhereUniqueWithoutEssayInputSchema } from './EssayAuditUpsertWithWhereUniqueWithoutEssayInputSchema'
import { EssayAuditCreateManyEssayInputEnvelopeSchema } from './EssayAuditCreateManyEssayInputEnvelopeSchema'
import { EssayAuditWhereUniqueInputSchema } from './EssayAuditWhereUniqueInputSchema'
import { EssayAuditUpdateWithWhereUniqueWithoutEssayInputSchema } from './EssayAuditUpdateWithWhereUniqueWithoutEssayInputSchema'
import { EssayAuditUpdateManyWithWhereWithoutEssayInputSchema } from './EssayAuditUpdateManyWithWhereWithoutEssayInputSchema'
import { EssayAuditScalarWhereInputSchema } from './EssayAuditScalarWhereInputSchema'

export const EssayAuditUncheckedUpdateManyWithoutEssayNestedInputSchema: z.ZodType<Prisma.EssayAuditUncheckedUpdateManyWithoutEssayNestedInput> =
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
			upsert: z
				.union([
					z.lazy(() => EssayAuditUpsertWithWhereUniqueWithoutEssayInputSchema),
					z
						.lazy(() => EssayAuditUpsertWithWhereUniqueWithoutEssayInputSchema)
						.array(),
				])
				.optional(),
			createMany: z
				.lazy(() => EssayAuditCreateManyEssayInputEnvelopeSchema)
				.optional(),
			set: z
				.union([
					z.lazy(() => EssayAuditWhereUniqueInputSchema),
					z.lazy(() => EssayAuditWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => EssayAuditWhereUniqueInputSchema),
					z.lazy(() => EssayAuditWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => EssayAuditWhereUniqueInputSchema),
					z.lazy(() => EssayAuditWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => EssayAuditWhereUniqueInputSchema),
					z.lazy(() => EssayAuditWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => EssayAuditUpdateWithWhereUniqueWithoutEssayInputSchema),
					z
						.lazy(() => EssayAuditUpdateWithWhereUniqueWithoutEssayInputSchema)
						.array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => EssayAuditUpdateManyWithWhereWithoutEssayInputSchema),
					z
						.lazy(() => EssayAuditUpdateManyWithWhereWithoutEssayInputSchema)
						.array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => EssayAuditScalarWhereInputSchema),
					z.lazy(() => EssayAuditScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict()

export default EssayAuditUncheckedUpdateManyWithoutEssayNestedInputSchema
