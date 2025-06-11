import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { UserUpdateWithoutEssayAuditInputSchema } from './UserUpdateWithoutEssayAuditInputSchema'
import { UserUncheckedUpdateWithoutEssayAuditInputSchema } from './UserUncheckedUpdateWithoutEssayAuditInputSchema'
import { UserCreateWithoutEssayAuditInputSchema } from './UserCreateWithoutEssayAuditInputSchema'
import { UserUncheckedCreateWithoutEssayAuditInputSchema } from './UserUncheckedCreateWithoutEssayAuditInputSchema'
import { UserWhereInputSchema } from './UserWhereInputSchema'

export const UserUpsertWithoutEssayAuditInputSchema: z.ZodType<Prisma.UserUpsertWithoutEssayAuditInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => UserUpdateWithoutEssayAuditInputSchema),
				z.lazy(() => UserUncheckedUpdateWithoutEssayAuditInputSchema),
			]),
			create: z.union([
				z.lazy(() => UserCreateWithoutEssayAuditInputSchema),
				z.lazy(() => UserUncheckedCreateWithoutEssayAuditInputSchema),
			]),
			where: z.lazy(() => UserWhereInputSchema).optional(),
		})
		.strict()

export default UserUpsertWithoutEssayAuditInputSchema
