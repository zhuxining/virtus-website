import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { UserCreateWithoutEssayAuditInputSchema } from './UserCreateWithoutEssayAuditInputSchema'
import { UserUncheckedCreateWithoutEssayAuditInputSchema } from './UserUncheckedCreateWithoutEssayAuditInputSchema'
import { UserCreateOrConnectWithoutEssayAuditInputSchema } from './UserCreateOrConnectWithoutEssayAuditInputSchema'
import { UserUpsertWithoutEssayAuditInputSchema } from './UserUpsertWithoutEssayAuditInputSchema'
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema'
import { UserUpdateToOneWithWhereWithoutEssayAuditInputSchema } from './UserUpdateToOneWithWhereWithoutEssayAuditInputSchema'
import { UserUpdateWithoutEssayAuditInputSchema } from './UserUpdateWithoutEssayAuditInputSchema'
import { UserUncheckedUpdateWithoutEssayAuditInputSchema } from './UserUncheckedUpdateWithoutEssayAuditInputSchema'

export const UserUpdateOneRequiredWithoutEssayAuditNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutEssayAuditNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => UserCreateWithoutEssayAuditInputSchema),
					z.lazy(() => UserUncheckedCreateWithoutEssayAuditInputSchema),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => UserCreateOrConnectWithoutEssayAuditInputSchema)
				.optional(),
			upsert: z.lazy(() => UserUpsertWithoutEssayAuditInputSchema).optional(),
			connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => UserUpdateToOneWithWhereWithoutEssayAuditInputSchema),
					z.lazy(() => UserUpdateWithoutEssayAuditInputSchema),
					z.lazy(() => UserUncheckedUpdateWithoutEssayAuditInputSchema),
				])
				.optional(),
		})
		.strict()

export default UserUpdateOneRequiredWithoutEssayAuditNestedInputSchema
