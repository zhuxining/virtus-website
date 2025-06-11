import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema'
import { UserCreateWithoutEventHistoryInputSchema } from './UserCreateWithoutEventHistoryInputSchema'
import { UserUncheckedCreateWithoutEventHistoryInputSchema } from './UserUncheckedCreateWithoutEventHistoryInputSchema'

export const UserCreateOrConnectWithoutEventHistoryInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutEventHistoryInput> =
	z
		.object({
			where: z.lazy(() => UserWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => UserCreateWithoutEventHistoryInputSchema),
				z.lazy(() => UserUncheckedCreateWithoutEventHistoryInputSchema),
			]),
		})
		.strict()

export default UserCreateOrConnectWithoutEventHistoryInputSchema
