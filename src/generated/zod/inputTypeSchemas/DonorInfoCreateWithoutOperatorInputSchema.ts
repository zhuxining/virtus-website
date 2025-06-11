import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'

export const DonorInfoCreateWithoutOperatorInputSchema: z.ZodType<Prisma.DonorInfoCreateWithoutOperatorInput> =
	z
		.object({
			name: z.string(),
			avatar: z.string().optional().nullable(),
			description: z.string().optional().nullable(),
			donationAmount: z.number().int().optional().nullable(),
			donationDate: z.coerce.date(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
		})
		.strict()

export default DonorInfoCreateWithoutOperatorInputSchema
