import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { DonorInfoCreateWithoutOperatorInputSchema } from './DonorInfoCreateWithoutOperatorInputSchema'
import { DonorInfoUncheckedCreateWithoutOperatorInputSchema } from './DonorInfoUncheckedCreateWithoutOperatorInputSchema'
import { DonorInfoCreateOrConnectWithoutOperatorInputSchema } from './DonorInfoCreateOrConnectWithoutOperatorInputSchema'
import { DonorInfoCreateManyOperatorInputEnvelopeSchema } from './DonorInfoCreateManyOperatorInputEnvelopeSchema'
import { DonorInfoWhereUniqueInputSchema } from './DonorInfoWhereUniqueInputSchema'

export const DonorInfoUncheckedCreateNestedManyWithoutOperatorInputSchema: z.ZodType<Prisma.DonorInfoUncheckedCreateNestedManyWithoutOperatorInput> =
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
			createMany: z
				.lazy(() => DonorInfoCreateManyOperatorInputEnvelopeSchema)
				.optional(),
			connect: z
				.union([
					z.lazy(() => DonorInfoWhereUniqueInputSchema),
					z.lazy(() => DonorInfoWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict()

export default DonorInfoUncheckedCreateNestedManyWithoutOperatorInputSchema
