import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'

export const DonorInfoCreateManyOperatorInputSchema: z.ZodType<Prisma.DonorInfoCreateManyOperatorInput> =
	z
		.object({
			id: z.number().int().optional(),
			name: z.string(),
			avatar: z.string().optional().nullable(),
			description: z.string().optional().nullable(),
			donationAmount: z.number().int().optional().nullable(),
			donationDate: z.coerce.date(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
		})
		.strict()

export default DonorInfoCreateManyOperatorInputSchema
