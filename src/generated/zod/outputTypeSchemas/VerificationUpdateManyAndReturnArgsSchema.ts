import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { VerificationUpdateManyMutationInputSchema } from '../inputTypeSchemas/VerificationUpdateManyMutationInputSchema'
import { VerificationUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/VerificationUncheckedUpdateManyInputSchema'
import { VerificationWhereInputSchema } from '../inputTypeSchemas/VerificationWhereInputSchema'

export const VerificationUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.VerificationUpdateManyAndReturnArgs> =
	z
		.object({
			data: z.union([
				VerificationUpdateManyMutationInputSchema,
				VerificationUncheckedUpdateManyInputSchema,
			]),
			where: VerificationWhereInputSchema.optional(),
			limit: z.number().optional(),
		})
		.strict()

export default VerificationUpdateManyAndReturnArgsSchema
