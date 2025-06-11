import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema'
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { RoleSchema } from './RoleSchema'
import { EnumRoleFieldUpdateOperationsInputSchema } from './EnumRoleFieldUpdateOperationsInputSchema'
import { AccountUpdateManyWithoutUserNestedInputSchema } from './AccountUpdateManyWithoutUserNestedInputSchema'
import { EssayUpdateManyWithoutAuthorNestedInputSchema } from './EssayUpdateManyWithoutAuthorNestedInputSchema'
import { EssayAuditUpdateManyWithoutOperatorNestedInputSchema } from './EssayAuditUpdateManyWithoutOperatorNestedInputSchema'
import { EssayLikeUpdateManyWithoutOperatorNestedInputSchema } from './EssayLikeUpdateManyWithoutOperatorNestedInputSchema'
import { EventHistoryUpdateManyWithoutOperatorNestedInputSchema } from './EventHistoryUpdateManyWithoutOperatorNestedInputSchema'
import { DonorInfoUpdateManyWithoutOperatorNestedInputSchema } from './DonorInfoUpdateManyWithoutOperatorNestedInputSchema'

export const UserUpdateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUpdateWithoutSessionsInput> =
	z
		.object({
			id: z
				.union([
					z.string(),
					z.lazy(() => StringFieldUpdateOperationsInputSchema),
				])
				.optional(),
			name: z
				.union([
					z.string(),
					z.lazy(() => StringFieldUpdateOperationsInputSchema),
				])
				.optional(),
			email: z
				.union([
					z.string(),
					z.lazy(() => StringFieldUpdateOperationsInputSchema),
				])
				.optional(),
			emailVerified: z
				.union([
					z.boolean(),
					z.lazy(() => BoolFieldUpdateOperationsInputSchema),
				])
				.optional(),
			image: z
				.union([
					z.string(),
					z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
				])
				.optional()
				.nullable(),
			createdAt: z
				.union([
					z.coerce.date(),
					z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
				])
				.optional(),
			updatedAt: z
				.union([
					z.coerce.date(),
					z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
				])
				.optional(),
			role: z
				.union([
					z.lazy(() => RoleSchema),
					z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema),
				])
				.optional(),
			accounts: z
				.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema)
				.optional(),
			essay: z
				.lazy(() => EssayUpdateManyWithoutAuthorNestedInputSchema)
				.optional(),
			essayAudit: z
				.lazy(() => EssayAuditUpdateManyWithoutOperatorNestedInputSchema)
				.optional(),
			essayLike: z
				.lazy(() => EssayLikeUpdateManyWithoutOperatorNestedInputSchema)
				.optional(),
			eventHistory: z
				.lazy(() => EventHistoryUpdateManyWithoutOperatorNestedInputSchema)
				.optional(),
			donorInfo: z
				.lazy(() => DonorInfoUpdateManyWithoutOperatorNestedInputSchema)
				.optional(),
		})
		.strict()

export default UserUpdateWithoutSessionsInputSchema
