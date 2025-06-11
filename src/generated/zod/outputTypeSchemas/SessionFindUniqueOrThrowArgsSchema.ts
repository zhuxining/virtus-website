import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { SessionIncludeSchema } from '../inputTypeSchemas/SessionIncludeSchema'
import { SessionWhereUniqueInputSchema } from '../inputTypeSchemas/SessionWhereUniqueInputSchema'
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SessionSelectSchema: z.ZodType<Prisma.SessionSelect> = z
	.object({
		id: z.boolean().optional(),
		expiresAt: z.boolean().optional(),
		token: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		ipAddress: z.boolean().optional(),
		userAgent: z.boolean().optional(),
		userId: z.boolean().optional(),
		user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
	})
	.strict()

export const SessionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.SessionFindUniqueOrThrowArgs> =
	z
		.object({
			select: SessionSelectSchema.optional(),
			include: z.lazy(() => SessionIncludeSchema).optional(),
			where: SessionWhereUniqueInputSchema,
		})
		.strict()

export default SessionFindUniqueOrThrowArgsSchema
