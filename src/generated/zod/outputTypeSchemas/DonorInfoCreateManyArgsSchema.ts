import { z } from 'zod'
import type { Prisma } from '@/generated/prisma'
import { DonorInfoCreateManyInputSchema } from '../inputTypeSchemas/DonorInfoCreateManyInputSchema'

export const DonorInfoCreateManyArgsSchema: z.ZodType<Prisma.DonorInfoCreateManyArgs> =
	z
		.object({
			data: z.union([
				DonorInfoCreateManyInputSchema,
				DonorInfoCreateManyInputSchema.array(),
			]),
		})
		.strict()

export default DonorInfoCreateManyArgsSchema
