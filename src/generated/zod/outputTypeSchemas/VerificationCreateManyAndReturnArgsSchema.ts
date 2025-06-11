import { z } from 'zod'
import type { Prisma } from '@/generated/prisma'
import { VerificationCreateManyInputSchema } from '../inputTypeSchemas/VerificationCreateManyInputSchema'

export const VerificationCreateManyAndReturnArgsSchema: z.ZodType<Prisma.VerificationCreateManyAndReturnArgs> =
	z
		.object({
			data: z.union([
				VerificationCreateManyInputSchema,
				VerificationCreateManyInputSchema.array(),
			]),
		})
		.strict()

export default VerificationCreateManyAndReturnArgsSchema
