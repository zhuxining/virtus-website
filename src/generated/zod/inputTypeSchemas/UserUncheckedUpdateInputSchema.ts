import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema'
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { RoleSchema } from './RoleSchema'
import { EnumRoleFieldUpdateOperationsInputSchema } from './EnumRoleFieldUpdateOperationsInputSchema'
import { SessionUncheckedUpdateManyWithoutUserNestedInputSchema } from './SessionUncheckedUpdateManyWithoutUserNestedInputSchema'
import { AccountUncheckedUpdateManyWithoutUserNestedInputSchema } from './AccountUncheckedUpdateManyWithoutUserNestedInputSchema'
import { EssayUncheckedUpdateManyWithoutAuthorNestedInputSchema } from './EssayUncheckedUpdateManyWithoutAuthorNestedInputSchema'
import { EssayAuditUncheckedUpdateManyWithoutOperatorNestedInputSchema } from './EssayAuditUncheckedUpdateManyWithoutOperatorNestedInputSchema'
import { EssayLikeUncheckedUpdateManyWithoutOperatorNestedInputSchema } from './EssayLikeUncheckedUpdateManyWithoutOperatorNestedInputSchema'
import { EventHistoryUncheckedUpdateManyWithoutOperatorNestedInputSchema } from './EventHistoryUncheckedUpdateManyWithoutOperatorNestedInputSchema'
import { DonorInfoUncheckedUpdateManyWithoutOperatorNestedInputSchema } from './DonorInfoUncheckedUpdateManyWithoutOperatorNestedInputSchema'

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> =
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
			sessions: z
				.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema)
				.optional(),
			accounts: z
				.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema)
				.optional(),
			essay: z
				.lazy(() => EssayUncheckedUpdateManyWithoutAuthorNestedInputSchema)
				.optional(),
			essayAudit: z
				.lazy(
					() => EssayAuditUncheckedUpdateManyWithoutOperatorNestedInputSchema,
				)
				.optional(),
			essayLike: z
				.lazy(
					() => EssayLikeUncheckedUpdateManyWithoutOperatorNestedInputSchema,
				)
				.optional(),
			eventHistory: z
				.lazy(
					() => EventHistoryUncheckedUpdateManyWithoutOperatorNestedInputSchema,
				)
				.optional(),
			donorInfo: z
				.lazy(
					() => DonorInfoUncheckedUpdateManyWithoutOperatorNestedInputSchema,
				)
				.optional(),
		})
		.strict()

export default UserUncheckedUpdateInputSchema
