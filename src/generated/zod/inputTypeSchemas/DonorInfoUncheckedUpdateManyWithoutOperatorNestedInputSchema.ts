import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { DonorInfoCreateWithoutOperatorInputSchema } from './DonorInfoCreateWithoutOperatorInputSchema'
import { DonorInfoUncheckedCreateWithoutOperatorInputSchema } from './DonorInfoUncheckedCreateWithoutOperatorInputSchema'
import { DonorInfoCreateOrConnectWithoutOperatorInputSchema } from './DonorInfoCreateOrConnectWithoutOperatorInputSchema'
import { DonorInfoUpsertWithWhereUniqueWithoutOperatorInputSchema } from './DonorInfoUpsertWithWhereUniqueWithoutOperatorInputSchema'
import { DonorInfoCreateManyOperatorInputEnvelopeSchema } from './DonorInfoCreateManyOperatorInputEnvelopeSchema'
import { DonorInfoWhereUniqueInputSchema } from './DonorInfoWhereUniqueInputSchema'
import { DonorInfoUpdateWithWhereUniqueWithoutOperatorInputSchema } from './DonorInfoUpdateWithWhereUniqueWithoutOperatorInputSchema'
import { DonorInfoUpdateManyWithWhereWithoutOperatorInputSchema } from './DonorInfoUpdateManyWithWhereWithoutOperatorInputSchema'
import { DonorInfoScalarWhereInputSchema } from './DonorInfoScalarWhereInputSchema'

export const DonorInfoUncheckedUpdateManyWithoutOperatorNestedInputSchema: z.ZodType<Prisma.DonorInfoUncheckedUpdateManyWithoutOperatorNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => DonorInfoCreateWithoutOperatorInputSchema),
					z.lazy(() => DonorInfoCreateWithoutOperatorInputSchema).array(),
					z.lazy(() => DonorInfoUncheckedCreateWithoutOperatorInputSchema),
					z
						.lazy(() => DonorInfoUncheckedCreateWithoutOperatorInputSchema)
						.array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => DonorInfoCreateOrConnectWithoutOperatorInputSchema),
					z
						.lazy(() => DonorInfoCreateOrConnectWithoutOperatorInputSchema)
						.array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(
						() => DonorInfoUpsertWithWhereUniqueWithoutOperatorInputSchema,
					),
					z
						.lazy(
							() => DonorInfoUpsertWithWhereUniqueWithoutOperatorInputSchema,
						)
						.array(),
				])
				.optional(),
			createMany: z
				.lazy(() => DonorInfoCreateManyOperatorInputEnvelopeSchema)
				.optional(),
			set: z
				.union([
					z.lazy(() => DonorInfoWhereUniqueInputSchema),
					z.lazy(() => DonorInfoWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => DonorInfoWhereUniqueInputSchema),
					z.lazy(() => DonorInfoWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => DonorInfoWhereUniqueInputSchema),
					z.lazy(() => DonorInfoWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => DonorInfoWhereUniqueInputSchema),
					z.lazy(() => DonorInfoWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(
						() => DonorInfoUpdateWithWhereUniqueWithoutOperatorInputSchema,
					),
					z
						.lazy(
							() => DonorInfoUpdateWithWhereUniqueWithoutOperatorInputSchema,
						)
						.array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => DonorInfoUpdateManyWithWhereWithoutOperatorInputSchema),
					z
						.lazy(() => DonorInfoUpdateManyWithWhereWithoutOperatorInputSchema)
						.array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => DonorInfoScalarWhereInputSchema),
					z.lazy(() => DonorInfoScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict()

export default DonorInfoUncheckedUpdateManyWithoutOperatorNestedInputSchema
