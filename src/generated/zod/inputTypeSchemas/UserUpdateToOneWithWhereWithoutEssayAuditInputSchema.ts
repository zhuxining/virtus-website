import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { UserWhereInputSchema } from './UserWhereInputSchema'
import { UserUpdateWithoutEssayAuditInputSchema } from './UserUpdateWithoutEssayAuditInputSchema'
import { UserUncheckedUpdateWithoutEssayAuditInputSchema } from './UserUncheckedUpdateWithoutEssayAuditInputSchema'

export const UserUpdateToOneWithWhereWithoutEssayAuditInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutEssayAuditInput> =
	z
		.object({
			where: z.lazy(() => UserWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => UserUpdateWithoutEssayAuditInputSchema),
				z.lazy(() => UserUncheckedUpdateWithoutEssayAuditInputSchema),
			]),
		})
		.strict()

export default UserUpdateToOneWithWhereWithoutEssayAuditInputSchema
