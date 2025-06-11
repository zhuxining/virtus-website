import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { DonorInfoIncludeSchema } from '../inputTypeSchemas/DonorInfoIncludeSchema'
import { DonorInfoCreateInputSchema } from '../inputTypeSchemas/DonorInfoCreateInputSchema'
import { DonorInfoUncheckedCreateInputSchema } from '../inputTypeSchemas/DonorInfoUncheckedCreateInputSchema'
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const DonorInfoCreateArgsSchema: z.ZodType<Prisma.DonorInfoCreateArgs> =
	z
		.object({
			select: DonorInfoSelectSchema.optional(),
			include: z.lazy(() => DonorInfoIncludeSchema).optional(),
			data: z.union([
				DonorInfoCreateInputSchema,
				DonorInfoUncheckedCreateInputSchema,
			]),
		})
		.strict()

export default DonorInfoCreateArgsSchema
