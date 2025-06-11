import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { UserWhereInputSchema } from './UserWhereInputSchema'
import { UserUpdateWithoutEssayInputSchema } from './UserUpdateWithoutEssayInputSchema'
import { UserUncheckedUpdateWithoutEssayInputSchema } from './UserUncheckedUpdateWithoutEssayInputSchema'

export const UserUpdateToOneWithWhereWithoutEssayInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutEssayInput> =
	z
		.object({
			where: z.lazy(() => UserWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => UserUpdateWithoutEssayInputSchema),
				z.lazy(() => UserUncheckedUpdateWithoutEssayInputSchema),
			]),
		})
		.strict()

export default UserUpdateToOneWithWhereWithoutEssayInputSchema
