import { z } from 'zod'
import type { Prisma } from '@/generated/prisma'
import { LoginLogWhereInputSchema } from '../inputTypeSchemas/LoginLogWhereInputSchema'
import { LoginLogOrderByWithRelationInputSchema } from '../inputTypeSchemas/LoginLogOrderByWithRelationInputSchema'
import { LoginLogWhereUniqueInputSchema } from '../inputTypeSchemas/LoginLogWhereUniqueInputSchema'
import { LoginLogScalarFieldEnumSchema } from '../inputTypeSchemas/LoginLogScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LoginLogSelectSchema: z.ZodType<Prisma.LoginLogSelect> = z
	.object({
		id: z.boolean().optional(),
		userId: z.boolean().optional(),
		ip: z.boolean().optional(),
		userAgent: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
	})
	.strict()

export const LoginLogFindManyArgsSchema: z.ZodType<Prisma.LoginLogFindManyArgs> =
	z
		.object({
			select: LoginLogSelectSchema.optional(),
			where: LoginLogWhereInputSchema.optional(),
			orderBy: z
				.union([
					LoginLogOrderByWithRelationInputSchema.array(),
					LoginLogOrderByWithRelationInputSchema,
				])
				.optional(),
			cursor: LoginLogWhereUniqueInputSchema.optional(),
			take: z.number().optional(),
			skip: z.number().optional(),
			distinct: z
				.union([
					LoginLogScalarFieldEnumSchema,
					LoginLogScalarFieldEnumSchema.array(),
				])
				.optional(),
		})
		.strict()

export default LoginLogFindManyArgsSchema
