import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { RoleSchema } from './RoleSchema'
import { SessionUncheckedCreateNestedManyWithoutUserInputSchema } from './SessionUncheckedCreateNestedManyWithoutUserInputSchema'
import { AccountUncheckedCreateNestedManyWithoutUserInputSchema } from './AccountUncheckedCreateNestedManyWithoutUserInputSchema'
import { EssayUncheckedCreateNestedManyWithoutAuthorInputSchema } from './EssayUncheckedCreateNestedManyWithoutAuthorInputSchema'
import { EssayAuditUncheckedCreateNestedManyWithoutOperatorInputSchema } from './EssayAuditUncheckedCreateNestedManyWithoutOperatorInputSchema'
import { EssayLikeUncheckedCreateNestedManyWithoutOperatorInputSchema } from './EssayLikeUncheckedCreateNestedManyWithoutOperatorInputSchema'
import { DonorInfoUncheckedCreateNestedManyWithoutOperatorInputSchema } from './DonorInfoUncheckedCreateNestedManyWithoutOperatorInputSchema'

export const UserUncheckedCreateWithoutEventHistoryInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutEventHistoryInput> =
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
			essayAudit: z
				.lazy(
					() => EssayAuditUncheckedCreateNestedManyWithoutOperatorInputSchema,
				)
				.optional(),
			essayLike: z
				.lazy(
					() => EssayLikeUncheckedCreateNestedManyWithoutOperatorInputSchema,
				)
				.optional(),
			donorInfo: z
				.lazy(
					() => DonorInfoUncheckedCreateNestedManyWithoutOperatorInputSchema,
				)
				.optional(),
		})
		.strict()

export default UserUncheckedCreateWithoutEventHistoryInputSchema
