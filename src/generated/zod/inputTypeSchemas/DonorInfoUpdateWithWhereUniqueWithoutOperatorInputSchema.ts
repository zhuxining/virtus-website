import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { DonorInfoWhereUniqueInputSchema } from './DonorInfoWhereUniqueInputSchema'
import { DonorInfoUpdateWithoutOperatorInputSchema } from './DonorInfoUpdateWithoutOperatorInputSchema'
import { DonorInfoUncheckedUpdateWithoutOperatorInputSchema } from './DonorInfoUncheckedUpdateWithoutOperatorInputSchema'

export const DonorInfoUpdateWithWhereUniqueWithoutOperatorInputSchema: z.ZodType<Prisma.DonorInfoUpdateWithWhereUniqueWithoutOperatorInput> =
	z
		.object({
			where: z.lazy(() => DonorInfoWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => DonorInfoUpdateWithoutOperatorInputSchema),
				z.lazy(() => DonorInfoUncheckedUpdateWithoutOperatorInputSchema),
			]),
		})
		.strict()

export default DonorInfoUpdateWithWhereUniqueWithoutOperatorInputSchema
