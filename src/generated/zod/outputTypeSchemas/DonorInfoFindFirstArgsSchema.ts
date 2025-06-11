import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { DonorInfoIncludeSchema } from '../inputTypeSchemas/DonorInfoIncludeSchema'
import { DonorInfoWhereInputSchema } from '../inputTypeSchemas/DonorInfoWhereInputSchema'
import { DonorInfoOrderByWithRelationInputSchema } from '../inputTypeSchemas/DonorInfoOrderByWithRelationInputSchema'
import { DonorInfoWhereUniqueInputSchema } from '../inputTypeSchemas/DonorInfoWhereUniqueInputSchema'
import { DonorInfoScalarFieldEnumSchema } from '../inputTypeSchemas/DonorInfoScalarFieldEnumSchema'
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

export const DonorInfoFindFirstArgsSchema: z.ZodType<Prisma.DonorInfoFindFirstArgs> =
	z
		.object({
			select: DonorInfoSelectSchema.optional(),
			include: z.lazy(() => DonorInfoIncludeSchema).optional(),
			where: DonorInfoWhereInputSchema.optional(),
			orderBy: z
				.union([
					DonorInfoOrderByWithRelationInputSchema.array(),
					DonorInfoOrderByWithRelationInputSchema,
				])
				.optional(),
			cursor: DonorInfoWhereUniqueInputSchema.optional(),
			take: z.number().optional(),
			skip: z.number().optional(),
			distinct: z
				.union([
					DonorInfoScalarFieldEnumSchema,
					DonorInfoScalarFieldEnumSchema.array(),
				])
				.optional(),
		})
		.strict()

export default DonorInfoFindFirstArgsSchema
