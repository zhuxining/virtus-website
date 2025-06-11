import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { UserCreateWithoutEssayAuditInputSchema } from './UserCreateWithoutEssayAuditInputSchema'
import { UserUncheckedCreateWithoutEssayAuditInputSchema } from './UserUncheckedCreateWithoutEssayAuditInputSchema'
import { UserCreateOrConnectWithoutEssayAuditInputSchema } from './UserCreateOrConnectWithoutEssayAuditInputSchema'
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema'

export const UserCreateNestedOneWithoutEssayAuditInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutEssayAuditInput> =
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
			connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
		})
		.strict()

export default UserCreateNestedOneWithoutEssayAuditInputSchema
