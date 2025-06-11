import { z } from 'zod'
import type { Prisma } from '@/generated/prisma'
import { LoginLogWhereUniqueInputSchema } from '../inputTypeSchemas/LoginLogWhereUniqueInputSchema'
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

export const LoginLogFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.LoginLogFindUniqueOrThrowArgs> =
	z
		.object({
			select: LoginLogSelectSchema.optional(),
			where: LoginLogWhereUniqueInputSchema,
		})
		.strict()

export default LoginLogFindUniqueOrThrowArgsSchema
