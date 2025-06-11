import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { RoleSchema } from './RoleSchema'
import { SessionCreateNestedManyWithoutUserInputSchema } from './SessionCreateNestedManyWithoutUserInputSchema'
import { AccountCreateNestedManyWithoutUserInputSchema } from './AccountCreateNestedManyWithoutUserInputSchema'
import { EssayCreateNestedManyWithoutAuthorInputSchema } from './EssayCreateNestedManyWithoutAuthorInputSchema'
import { EssayAuditCreateNestedManyWithoutOperatorInputSchema } from './EssayAuditCreateNestedManyWithoutOperatorInputSchema'
import { EssayLikeCreateNestedManyWithoutOperatorInputSchema } from './EssayLikeCreateNestedManyWithoutOperatorInputSchema'
import { DonorInfoCreateNestedManyWithoutOperatorInputSchema } from './DonorInfoCreateNestedManyWithoutOperatorInputSchema'

export const UserCreateWithoutEventHistoryInputSchema: z.ZodType<Prisma.UserCreateWithoutEventHistoryInput> =
	z
		.object({
			id: z.string(),
			name: z.string(),
			email: z.string(),
			emailVerified: z.boolean(),
			image: z.string().optional().nullable(),
			createdAt: z.coerce.date(),
			updatedAt: z.coerce.date(),
			role: z.lazy(() => RoleSchema).optional(),
			sessions: z
				.lazy(() => SessionCreateNestedManyWithoutUserInputSchema)
				.optional(),
			accounts: z
				.lazy(() => AccountCreateNestedManyWithoutUserInputSchema)
				.optional(),
			essay: z
				.lazy(() => EssayCreateNestedManyWithoutAuthorInputSchema)
				.optional(),
			essayAudit: z
				.lazy(() => EssayAuditCreateNestedManyWithoutOperatorInputSchema)
				.optional(),
			essayLike: z
				.lazy(() => EssayLikeCreateNestedManyWithoutOperatorInputSchema)
				.optional(),
			donorInfo: z
				.lazy(() => DonorInfoCreateNestedManyWithoutOperatorInputSchema)
				.optional(),
		})
		.strict()

export default UserCreateWithoutEventHistoryInputSchema
