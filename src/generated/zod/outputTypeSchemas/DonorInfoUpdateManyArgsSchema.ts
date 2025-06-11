import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { DonorInfoUpdateManyMutationInputSchema } from '../inputTypeSchemas/DonorInfoUpdateManyMutationInputSchema'
import { DonorInfoUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/DonorInfoUncheckedUpdateManyInputSchema'
import { DonorInfoWhereInputSchema } from '../inputTypeSchemas/DonorInfoWhereInputSchema'

export const DonorInfoUpdateManyArgsSchema: z.ZodType<Prisma.DonorInfoUpdateManyArgs> =
	z
		.object({
			data: z.union([
				DonorInfoUpdateManyMutationInputSchema,
				DonorInfoUncheckedUpdateManyInputSchema,
			]),
			where: DonorInfoWhereInputSchema.optional(),
			limit: z.number().optional(),
		})
		.strict()

export default DonorInfoUpdateManyArgsSchema
