import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { UserWhereInputSchema } from './UserWhereInputSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { BoolFilterSchema } from './BoolFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { EnumRoleFilterSchema } from './EnumRoleFilterSchema'
import { RoleSchema } from './RoleSchema'
import { SessionListRelationFilterSchema } from './SessionListRelationFilterSchema'
import { AccountListRelationFilterSchema } from './AccountListRelationFilterSchema'
import { EssayListRelationFilterSchema } from './EssayListRelationFilterSchema'
import { EssayAuditListRelationFilterSchema } from './EssayAuditListRelationFilterSchema'
import { EssayLikeListRelationFilterSchema } from './EssayLikeListRelationFilterSchema'
import { EventHistoryListRelationFilterSchema } from './EventHistoryListRelationFilterSchema'
import { DonorInfoListRelationFilterSchema } from './DonorInfoListRelationFilterSchema'

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> =
	z
		.union([
			z.object({
				id: z.string(),
				email: z.string(),
			}),
			z.object({
				id: z.string(),
			}),
			z.object({
				email: z.string(),
			}),
		])
		.and(
			z
				.object({
					id: z.string().optional(),
					email: z.string().optional(),
					AND: z
						.union([
							z.lazy(() => UserWhereInputSchema),
							z.lazy(() => UserWhereInputSchema).array(),
						])
						.optional(),
					OR: z
						.lazy(() => UserWhereInputSchema)
						.array()
						.optional(),
					NOT: z
						.union([
							z.lazy(() => UserWhereInputSchema),
							z.lazy(() => UserWhereInputSchema).array(),
						])
						.optional(),
					name: z
						.union([z.lazy(() => StringFilterSchema), z.string()])
						.optional(),
					emailVerified: z
						.union([z.lazy(() => BoolFilterSchema), z.boolean()])
						.optional(),
					image: z
						.union([z.lazy(() => StringNullableFilterSchema), z.string()])
						.optional()
						.nullable(),
					createdAt: z
						.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
						.optional(),
					updatedAt: z
						.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
						.optional(),
					role: z
						.union([
							z.lazy(() => EnumRoleFilterSchema),
							z.lazy(() => RoleSchema),
						])
						.optional(),
					sessions: z.lazy(() => SessionListRelationFilterSchema).optional(),
					accounts: z.lazy(() => AccountListRelationFilterSchema).optional(),
					essay: z.lazy(() => EssayListRelationFilterSchema).optional(),
					essayAudit: z
						.lazy(() => EssayAuditListRelationFilterSchema)
						.optional(),
					essayLike: z.lazy(() => EssayLikeListRelationFilterSchema).optional(),
					eventHistory: z
						.lazy(() => EventHistoryListRelationFilterSchema)
						.optional(),
					donorInfo: z.lazy(() => DonorInfoListRelationFilterSchema).optional(),
				})
				.strict(),
		)

export default UserWhereUniqueInputSchema
