import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { EssayAuditCreateWithoutOperatorInputSchema } from './EssayAuditCreateWithoutOperatorInputSchema'
import { EssayAuditUncheckedCreateWithoutOperatorInputSchema } from './EssayAuditUncheckedCreateWithoutOperatorInputSchema'
import { EssayAuditCreateOrConnectWithoutOperatorInputSchema } from './EssayAuditCreateOrConnectWithoutOperatorInputSchema'
import { EssayAuditUpsertWithWhereUniqueWithoutOperatorInputSchema } from './EssayAuditUpsertWithWhereUniqueWithoutOperatorInputSchema'
import { EssayAuditCreateManyOperatorInputEnvelopeSchema } from './EssayAuditCreateManyOperatorInputEnvelopeSchema'
import { EssayAuditWhereUniqueInputSchema } from './EssayAuditWhereUniqueInputSchema'
import { EssayAuditUpdateWithWhereUniqueWithoutOperatorInputSchema } from './EssayAuditUpdateWithWhereUniqueWithoutOperatorInputSchema'
import { EssayAuditUpdateManyWithWhereWithoutOperatorInputSchema } from './EssayAuditUpdateManyWithWhereWithoutOperatorInputSchema'
import { EssayAuditScalarWhereInputSchema } from './EssayAuditScalarWhereInputSchema'

export const EssayAuditUncheckedUpdateManyWithoutOperatorNestedInputSchema: z.ZodType<Prisma.EssayAuditUncheckedUpdateManyWithoutOperatorNestedInput> =
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
			upsert: z
				.union([
					z.lazy(
						() => EssayAuditUpsertWithWhereUniqueWithoutOperatorInputSchema,
					),
					z
						.lazy(
							() => EssayAuditUpsertWithWhereUniqueWithoutOperatorInputSchema,
						)
						.array(),
				])
				.optional(),
			createMany: z
				.lazy(() => EssayAuditCreateManyOperatorInputEnvelopeSchema)
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
					z.lazy(
						() => EssayAuditUpdateWithWhereUniqueWithoutOperatorInputSchema,
					),
					z
						.lazy(
							() => EssayAuditUpdateWithWhereUniqueWithoutOperatorInputSchema,
						)
						.array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => EssayAuditUpdateManyWithWhereWithoutOperatorInputSchema),
					z
						.lazy(() => EssayAuditUpdateManyWithWhereWithoutOperatorInputSchema)
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

export default EssayAuditUncheckedUpdateManyWithoutOperatorNestedInputSchema
