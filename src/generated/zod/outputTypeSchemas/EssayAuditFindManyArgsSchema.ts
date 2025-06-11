import { z } from 'zod'
import type { Prisma } from '@/generated/prisma'
import { EssayAuditIncludeSchema } from '../inputTypeSchemas/EssayAuditIncludeSchema'
import { EssayAuditWhereInputSchema } from '../inputTypeSchemas/EssayAuditWhereInputSchema'
import { EssayAuditOrderByWithRelationInputSchema } from '../inputTypeSchemas/EssayAuditOrderByWithRelationInputSchema'
import { EssayAuditWhereUniqueInputSchema } from '../inputTypeSchemas/EssayAuditWhereUniqueInputSchema'
import { EssayAuditScalarFieldEnumSchema } from '../inputTypeSchemas/EssayAuditScalarFieldEnumSchema'
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

export const EssayAuditFindManyArgsSchema: z.ZodType<Prisma.EssayAuditFindManyArgs> =
	z
		.object({
			select: EssayAuditSelectSchema.optional(),
			include: z.lazy(() => EssayAuditIncludeSchema).optional(),
			where: EssayAuditWhereInputSchema.optional(),
			orderBy: z
				.union([
					EssayAuditOrderByWithRelationInputSchema.array(),
					EssayAuditOrderByWithRelationInputSchema,
				])
				.optional(),
			cursor: EssayAuditWhereUniqueInputSchema.optional(),
			take: z.number().optional(),
			skip: z.number().optional(),
			distinct: z
				.union([
					EssayAuditScalarFieldEnumSchema,
					EssayAuditScalarFieldEnumSchema.array(),
				])
				.optional(),
		})
		.strict()

export default EssayAuditFindManyArgsSchema
