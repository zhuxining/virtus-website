import { z } from 'zod'
import type { Prisma } from '@/generated/prisma'
import { DonorInfoIncludeSchema } from '../inputTypeSchemas/DonorInfoIncludeSchema'
import { DonorInfoWhereUniqueInputSchema } from '../inputTypeSchemas/DonorInfoWhereUniqueInputSchema'
import { DonorInfoCreateInputSchema } from '../inputTypeSchemas/DonorInfoCreateInputSchema'
import { DonorInfoUncheckedCreateInputSchema } from '../inputTypeSchemas/DonorInfoUncheckedCreateInputSchema'
import { DonorInfoUpdateInputSchema } from '../inputTypeSchemas/DonorInfoUpdateInputSchema'
import { DonorInfoUncheckedUpdateInputSchema } from '../inputTypeSchemas/DonorInfoUncheckedUpdateInputSchema'
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

export const DonorInfoUpsertArgsSchema: z.ZodType<Prisma.DonorInfoUpsertArgs> =
	z
		.object({
			select: DonorInfoSelectSchema.optional(),
			include: z.lazy(() => DonorInfoIncludeSchema).optional(),
			where: DonorInfoWhereUniqueInputSchema,
			create: z.union([
				DonorInfoCreateInputSchema,
				DonorInfoUncheckedCreateInputSchema,
			]),
			update: z.union([
				DonorInfoUpdateInputSchema,
				DonorInfoUncheckedUpdateInputSchema,
			]),
		})
		.strict()

export default DonorInfoUpsertArgsSchema
