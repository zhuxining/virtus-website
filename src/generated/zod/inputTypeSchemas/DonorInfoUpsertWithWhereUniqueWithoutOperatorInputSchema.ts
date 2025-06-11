import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { DonorInfoWhereUniqueInputSchema } from './DonorInfoWhereUniqueInputSchema'
import { DonorInfoUpdateWithoutOperatorInputSchema } from './DonorInfoUpdateWithoutOperatorInputSchema'
import { DonorInfoUncheckedUpdateWithoutOperatorInputSchema } from './DonorInfoUncheckedUpdateWithoutOperatorInputSchema'
import { DonorInfoCreateWithoutOperatorInputSchema } from './DonorInfoCreateWithoutOperatorInputSchema'
import { DonorInfoUncheckedCreateWithoutOperatorInputSchema } from './DonorInfoUncheckedCreateWithoutOperatorInputSchema'

export const DonorInfoUpsertWithWhereUniqueWithoutOperatorInputSchema: z.ZodType<Prisma.DonorInfoUpsertWithWhereUniqueWithoutOperatorInput> =
	z
		.object({
			where: z.lazy(() => DonorInfoWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => DonorInfoUpdateWithoutOperatorInputSchema),
				z.lazy(() => DonorInfoUncheckedUpdateWithoutOperatorInputSchema),
			]),
			create: z.union([
				z.lazy(() => DonorInfoCreateWithoutOperatorInputSchema),
				z.lazy(() => DonorInfoUncheckedCreateWithoutOperatorInputSchema),
			]),
		})
		.strict()

export default DonorInfoUpsertWithWhereUniqueWithoutOperatorInputSchema
