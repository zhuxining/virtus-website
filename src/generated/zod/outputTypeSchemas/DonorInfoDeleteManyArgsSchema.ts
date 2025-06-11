import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { DonorInfoWhereInputSchema } from '../inputTypeSchemas/DonorInfoWhereInputSchema'

export const DonorInfoDeleteManyArgsSchema: z.ZodType<Prisma.DonorInfoDeleteManyArgs> =
	z
		.object({
			where: DonorInfoWhereInputSchema.optional(),
			limit: z.number().optional(),
		})
		.strict()

export default DonorInfoDeleteManyArgsSchema
