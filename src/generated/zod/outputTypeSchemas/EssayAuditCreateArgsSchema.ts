import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { EssayAuditIncludeSchema } from '../inputTypeSchemas/EssayAuditIncludeSchema'
import { EssayAuditCreateInputSchema } from '../inputTypeSchemas/EssayAuditCreateInputSchema'
import { EssayAuditUncheckedCreateInputSchema } from '../inputTypeSchemas/EssayAuditUncheckedCreateInputSchema'
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

export const EssayAuditCreateArgsSchema: z.ZodType<Prisma.EssayAuditCreateArgs> =
	z
		.object({
			select: EssayAuditSelectSchema.optional(),
			include: z.lazy(() => EssayAuditIncludeSchema).optional(),
			data: z.union([
				EssayAuditCreateInputSchema,
				EssayAuditUncheckedCreateInputSchema,
			]),
		})
		.strict()

export default EssayAuditCreateArgsSchema
