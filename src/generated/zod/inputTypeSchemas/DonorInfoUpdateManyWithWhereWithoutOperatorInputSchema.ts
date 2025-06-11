import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { DonorInfoScalarWhereInputSchema } from './DonorInfoScalarWhereInputSchema'
import { DonorInfoUpdateManyMutationInputSchema } from './DonorInfoUpdateManyMutationInputSchema'
import { DonorInfoUncheckedUpdateManyWithoutOperatorInputSchema } from './DonorInfoUncheckedUpdateManyWithoutOperatorInputSchema'

export const DonorInfoUpdateManyWithWhereWithoutOperatorInputSchema: z.ZodType<Prisma.DonorInfoUpdateManyWithWhereWithoutOperatorInput> =
	z
		.object({
			where: z.lazy(() => DonorInfoScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => DonorInfoUpdateManyMutationInputSchema),
				z.lazy(() => DonorInfoUncheckedUpdateManyWithoutOperatorInputSchema),
			]),
		})
		.strict()

export default DonorInfoUpdateManyWithWhereWithoutOperatorInputSchema
