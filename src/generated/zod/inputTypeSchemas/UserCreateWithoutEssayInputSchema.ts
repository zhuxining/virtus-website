import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { RoleSchema } from './RoleSchema'
import { SessionCreateNestedManyWithoutUserInputSchema } from './SessionCreateNestedManyWithoutUserInputSchema'
import { AccountCreateNestedManyWithoutUserInputSchema } from './AccountCreateNestedManyWithoutUserInputSchema'
import { EssayAuditCreateNestedManyWithoutOperatorInputSchema } from './EssayAuditCreateNestedManyWithoutOperatorInputSchema'
import { EssayLikeCreateNestedManyWithoutOperatorInputSchema } from './EssayLikeCreateNestedManyWithoutOperatorInputSchema'
import { EventHistoryCreateNestedManyWithoutOperatorInputSchema } from './EventHistoryCreateNestedManyWithoutOperatorInputSchema'
import { DonorInfoCreateNestedManyWithoutOperatorInputSchema } from './DonorInfoCreateNestedManyWithoutOperatorInputSchema'

export const UserCreateWithoutEssayInputSchema: z.ZodType<Prisma.UserCreateWithoutEssayInput> =
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
			essayAudit: z
				.lazy(() => EssayAuditCreateNestedManyWithoutOperatorInputSchema)
				.optional(),
			essayLike: z
				.lazy(() => EssayLikeCreateNestedManyWithoutOperatorInputSchema)
				.optional(),
			eventHistory: z
				.lazy(() => EventHistoryCreateNestedManyWithoutOperatorInputSchema)
				.optional(),
			donorInfo: z
				.lazy(() => DonorInfoCreateNestedManyWithoutOperatorInputSchema)
				.optional(),
		})
		.strict()

export default UserCreateWithoutEssayInputSchema
