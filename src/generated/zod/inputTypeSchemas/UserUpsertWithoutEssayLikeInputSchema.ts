import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { UserUpdateWithoutEssayLikeInputSchema } from './UserUpdateWithoutEssayLikeInputSchema'
import { UserUncheckedUpdateWithoutEssayLikeInputSchema } from './UserUncheckedUpdateWithoutEssayLikeInputSchema'
import { UserCreateWithoutEssayLikeInputSchema } from './UserCreateWithoutEssayLikeInputSchema'
import { UserUncheckedCreateWithoutEssayLikeInputSchema } from './UserUncheckedCreateWithoutEssayLikeInputSchema'
import { UserWhereInputSchema } from './UserWhereInputSchema'

export const UserUpsertWithoutEssayLikeInputSchema: z.ZodType<Prisma.UserUpsertWithoutEssayLikeInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => UserUpdateWithoutEssayLikeInputSchema),
				z.lazy(() => UserUncheckedUpdateWithoutEssayLikeInputSchema),
			]),
			create: z.union([
				z.lazy(() => UserCreateWithoutEssayLikeInputSchema),
				z.lazy(() => UserUncheckedCreateWithoutEssayLikeInputSchema),
			]),
			where: z.lazy(() => UserWhereInputSchema).optional(),
		})
		.strict()

export default UserUpsertWithoutEssayLikeInputSchema
