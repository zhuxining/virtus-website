import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { DonorInfoWhereUniqueInputSchema } from './DonorInfoWhereUniqueInputSchema'
import { DonorInfoCreateWithoutOperatorInputSchema } from './DonorInfoCreateWithoutOperatorInputSchema'
import { DonorInfoUncheckedCreateWithoutOperatorInputSchema } from './DonorInfoUncheckedCreateWithoutOperatorInputSchema'

export const DonorInfoCreateOrConnectWithoutOperatorInputSchema: z.ZodType<Prisma.DonorInfoCreateOrConnectWithoutOperatorInput> =
	z
		.object({
			where: z.lazy(() => DonorInfoWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => DonorInfoCreateWithoutOperatorInputSchema),
				z.lazy(() => DonorInfoUncheckedCreateWithoutOperatorInputSchema),
			]),
		})
		.strict()

export default DonorInfoCreateOrConnectWithoutOperatorInputSchema
