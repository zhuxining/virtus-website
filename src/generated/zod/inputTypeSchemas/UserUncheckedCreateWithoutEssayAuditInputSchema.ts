import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { RoleSchema } from './RoleSchema'
import { SessionUncheckedCreateNestedManyWithoutUserInputSchema } from './SessionUncheckedCreateNestedManyWithoutUserInputSchema'
import { AccountUncheckedCreateNestedManyWithoutUserInputSchema } from './AccountUncheckedCreateNestedManyWithoutUserInputSchema'
import { EssayUncheckedCreateNestedManyWithoutAuthorInputSchema } from './EssayUncheckedCreateNestedManyWithoutAuthorInputSchema'
import { EssayLikeUncheckedCreateNestedManyWithoutOperatorInputSchema } from './EssayLikeUncheckedCreateNestedManyWithoutOperatorInputSchema'
import { EventHistoryUncheckedCreateNestedManyWithoutOperatorInputSchema } from './EventHistoryUncheckedCreateNestedManyWithoutOperatorInputSchema'
import { DonorInfoUncheckedCreateNestedManyWithoutOperatorInputSchema } from './DonorInfoUncheckedCreateNestedManyWithoutOperatorInputSchema'

export const UserUncheckedCreateWithoutEssayAuditInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutEssayAuditInput> =
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
				.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema)
				.optional(),
			accounts: z
				.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema)
				.optional(),
			essay: z
				.lazy(() => EssayUncheckedCreateNestedManyWithoutAuthorInputSchema)
				.optional(),
			essayLike: z
				.lazy(
					() => EssayLikeUncheckedCreateNestedManyWithoutOperatorInputSchema,
				)
				.optional(),
			eventHistory: z
				.lazy(
					() => EventHistoryUncheckedCreateNestedManyWithoutOperatorInputSchema,
				)
				.optional(),
			donorInfo: z
				.lazy(
					() => DonorInfoUncheckedCreateNestedManyWithoutOperatorInputSchema,
				)
				.optional(),
		})
		.strict()

export default UserUncheckedCreateWithoutEssayAuditInputSchema
