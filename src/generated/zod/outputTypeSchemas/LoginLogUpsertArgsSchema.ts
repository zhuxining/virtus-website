import { z } from 'zod'
import type { Prisma } from '@/generated/prisma'
import { LoginLogWhereUniqueInputSchema } from '../inputTypeSchemas/LoginLogWhereUniqueInputSchema'
import { LoginLogCreateInputSchema } from '../inputTypeSchemas/LoginLogCreateInputSchema'
import { LoginLogUncheckedCreateInputSchema } from '../inputTypeSchemas/LoginLogUncheckedCreateInputSchema'
import { LoginLogUpdateInputSchema } from '../inputTypeSchemas/LoginLogUpdateInputSchema'
import { LoginLogUncheckedUpdateInputSchema } from '../inputTypeSchemas/LoginLogUncheckedUpdateInputSchema'
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

export const LoginLogUpsertArgsSchema: z.ZodType<Prisma.LoginLogUpsertArgs> = z
	.object({
		select: LoginLogSelectSchema.optional(),
		where: LoginLogWhereUniqueInputSchema,
		create: z.union([
			LoginLogCreateInputSchema,
			LoginLogUncheckedCreateInputSchema,
		]),
		update: z.union([
			LoginLogUpdateInputSchema,
			LoginLogUncheckedUpdateInputSchema,
		]),
	})
	.strict()

export default LoginLogUpsertArgsSchema
