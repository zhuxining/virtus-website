import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { LoginLogCreateInputSchema } from '../inputTypeSchemas/LoginLogCreateInputSchema'
import { LoginLogUncheckedCreateInputSchema } from '../inputTypeSchemas/LoginLogUncheckedCreateInputSchema'
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

export const LoginLogCreateArgsSchema: z.ZodType<Prisma.LoginLogCreateArgs> = z
	.object({
		select: LoginLogSelectSchema.optional(),
		data: z.union([
			LoginLogCreateInputSchema,
			LoginLogUncheckedCreateInputSchema,
		]),
	})
	.strict()

export default LoginLogCreateArgsSchema
