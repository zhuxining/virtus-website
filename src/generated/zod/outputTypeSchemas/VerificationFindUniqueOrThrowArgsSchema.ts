import { z } from 'zod'
import type { Prisma } from '@/generated/prisma'
import { VerificationWhereUniqueInputSchema } from '../inputTypeSchemas/VerificationWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const VerificationSelectSchema: z.ZodType<Prisma.VerificationSelect> = z
	.object({
		id: z.boolean().optional(),
		identifier: z.boolean().optional(),
		value: z.boolean().optional(),
		expiresAt: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
	})
	.strict()

export const VerificationFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.VerificationFindUniqueOrThrowArgs> =
	z
		.object({
			select: VerificationSelectSchema.optional(),
			where: VerificationWhereUniqueInputSchema,
		})
		.strict()

export default VerificationFindUniqueOrThrowArgsSchema
