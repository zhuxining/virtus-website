import { z } from 'zod'
import type { Prisma } from '@/generated/prisma'
import { DonorInfoCreateManyInputSchema } from '../inputTypeSchemas/DonorInfoCreateManyInputSchema'

export const DonorInfoCreateManyAndReturnArgsSchema: z.ZodType<Prisma.DonorInfoCreateManyAndReturnArgs> =
	z
		.object({
			data: z.union([
				DonorInfoCreateManyInputSchema,
				DonorInfoCreateManyInputSchema.array(),
			]),
		})
		.strict()

export default DonorInfoCreateManyAndReturnArgsSchema
