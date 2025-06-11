import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { DonorInfoSelectSchema } from '../inputTypeSchemas/DonorInfoSelectSchema'
import { DonorInfoIncludeSchema } from '../inputTypeSchemas/DonorInfoIncludeSchema'

export const DonorInfoArgsSchema: z.ZodType<Prisma.DonorInfoDefaultArgs> = z
	.object({
		select: z.lazy(() => DonorInfoSelectSchema).optional(),
		include: z.lazy(() => DonorInfoIncludeSchema).optional(),
	})
	.strict()

export default DonorInfoArgsSchema
