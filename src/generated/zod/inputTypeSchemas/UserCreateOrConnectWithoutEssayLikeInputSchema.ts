import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema'
import { UserCreateWithoutEssayLikeInputSchema } from './UserCreateWithoutEssayLikeInputSchema'
import { UserUncheckedCreateWithoutEssayLikeInputSchema } from './UserUncheckedCreateWithoutEssayLikeInputSchema'

export const UserCreateOrConnectWithoutEssayLikeInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutEssayLikeInput> =
	z
		.object({
			where: z.lazy(() => UserWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => UserCreateWithoutEssayLikeInputSchema),
				z.lazy(() => UserUncheckedCreateWithoutEssayLikeInputSchema),
			]),
		})
		.strict()

export default UserCreateOrConnectWithoutEssayLikeInputSchema
