import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { UserUpdateWithoutEssayInputSchema } from './UserUpdateWithoutEssayInputSchema'
import { UserUncheckedUpdateWithoutEssayInputSchema } from './UserUncheckedUpdateWithoutEssayInputSchema'
import { UserCreateWithoutEssayInputSchema } from './UserCreateWithoutEssayInputSchema'
import { UserUncheckedCreateWithoutEssayInputSchema } from './UserUncheckedCreateWithoutEssayInputSchema'
import { UserWhereInputSchema } from './UserWhereInputSchema'

export const UserUpsertWithoutEssayInputSchema: z.ZodType<Prisma.UserUpsertWithoutEssayInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => UserUpdateWithoutEssayInputSchema),
				z.lazy(() => UserUncheckedUpdateWithoutEssayInputSchema),
			]),
			create: z.union([
				z.lazy(() => UserCreateWithoutEssayInputSchema),
				z.lazy(() => UserUncheckedCreateWithoutEssayInputSchema),
			]),
			where: z.lazy(() => UserWhereInputSchema).optional(),
		})
		.strict()

export default UserUpsertWithoutEssayInputSchema
