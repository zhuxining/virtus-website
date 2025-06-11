import { z } from 'zod'
import type { Prisma } from '@/generated/prisma'
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema'

export const DonorInfoSelectSchema: z.ZodType<Prisma.DonorInfoSelect> = z
	.object({
		id: z.boolean().optional(),
		name: z.boolean().optional(),
		avatar: z.boolean().optional(),
		description: z.boolean().optional(),
		donationAmount: z.boolean().optional(),
		donationDate: z.boolean().optional(),
		operatorId: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		operator: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
	})
	.strict()

export default DonorInfoSelectSchema
