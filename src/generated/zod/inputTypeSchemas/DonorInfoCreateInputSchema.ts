import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { UserCreateNestedOneWithoutDonorInfoInputSchema } from './UserCreateNestedOneWithoutDonorInfoInputSchema'

export const DonorInfoCreateInputSchema: z.ZodType<Prisma.DonorInfoCreateInput> =
	z
		.object({
			name: z.string(),
			avatar: z.string().optional().nullable(),
			description: z.string().optional().nullable(),
			donationAmount: z.number().int().optional().nullable(),
			donationDate: z.coerce.date(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			operator: z.lazy(() => UserCreateNestedOneWithoutDonorInfoInputSchema),
		})
		.strict()

export default DonorInfoCreateInputSchema
