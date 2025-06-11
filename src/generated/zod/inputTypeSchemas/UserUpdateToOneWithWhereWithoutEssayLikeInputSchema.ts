import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { UserWhereInputSchema } from './UserWhereInputSchema'
import { UserUpdateWithoutEssayLikeInputSchema } from './UserUpdateWithoutEssayLikeInputSchema'
import { UserUncheckedUpdateWithoutEssayLikeInputSchema } from './UserUncheckedUpdateWithoutEssayLikeInputSchema'

export const UserUpdateToOneWithWhereWithoutEssayLikeInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutEssayLikeInput> =
	z
		.object({
			where: z.lazy(() => UserWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => UserUpdateWithoutEssayLikeInputSchema),
				z.lazy(() => UserUncheckedUpdateWithoutEssayLikeInputSchema),
			]),
		})
		.strict()

export default UserUpdateToOneWithWhereWithoutEssayLikeInputSchema
