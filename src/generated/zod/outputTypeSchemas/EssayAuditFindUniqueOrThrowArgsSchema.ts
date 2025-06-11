import { z } from 'zod'
import type { Prisma } from '@/generated/prisma'
import { EssayAuditIncludeSchema } from '../inputTypeSchemas/EssayAuditIncludeSchema'
import { EssayAuditWhereUniqueInputSchema } from '../inputTypeSchemas/EssayAuditWhereUniqueInputSchema'
import { EssayArgsSchema } from '../outputTypeSchemas/EssayArgsSchema'
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EssayAuditSelectSchema: z.ZodType<Prisma.EssayAuditSelect> = z
	.object({
		id: z.boolean().optional(),
		essayId: z.boolean().optional(),
		auditStatus: z.boolean().optional(),
		auditMsg: z.boolean().optional(),
		operatorId: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		essay: z.union([z.boolean(), z.lazy(() => EssayArgsSchema)]).optional(),
		operator: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
	})
	.strict()

export const EssayAuditFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.EssayAuditFindUniqueOrThrowArgs> =
	z
		.object({
			select: EssayAuditSelectSchema.optional(),
			include: z.lazy(() => EssayAuditIncludeSchema).optional(),
			where: EssayAuditWhereUniqueInputSchema,
		})
		.strict()

export default EssayAuditFindUniqueOrThrowArgsSchema
