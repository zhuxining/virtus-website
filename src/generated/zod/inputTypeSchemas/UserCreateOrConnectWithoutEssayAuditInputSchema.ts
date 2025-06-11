import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema'
import { UserCreateWithoutEssayAuditInputSchema } from './UserCreateWithoutEssayAuditInputSchema'
import { UserUncheckedCreateWithoutEssayAuditInputSchema } from './UserUncheckedCreateWithoutEssayAuditInputSchema'

export const UserCreateOrConnectWithoutEssayAuditInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutEssayAuditInput> =
	z
		.object({
			where: z.lazy(() => UserWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => UserCreateWithoutEssayAuditInputSchema),
				z.lazy(() => UserUncheckedCreateWithoutEssayAuditInputSchema),
			]),
		})
		.strict()

export default UserCreateOrConnectWithoutEssayAuditInputSchema
