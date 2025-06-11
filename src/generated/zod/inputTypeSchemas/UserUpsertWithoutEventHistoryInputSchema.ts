import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { UserUpdateWithoutEventHistoryInputSchema } from './UserUpdateWithoutEventHistoryInputSchema'
import { UserUncheckedUpdateWithoutEventHistoryInputSchema } from './UserUncheckedUpdateWithoutEventHistoryInputSchema'
import { UserCreateWithoutEventHistoryInputSchema } from './UserCreateWithoutEventHistoryInputSchema'
import { UserUncheckedCreateWithoutEventHistoryInputSchema } from './UserUncheckedCreateWithoutEventHistoryInputSchema'
import { UserWhereInputSchema } from './UserWhereInputSchema'

export const UserUpsertWithoutEventHistoryInputSchema: z.ZodType<Prisma.UserUpsertWithoutEventHistoryInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => UserUpdateWithoutEventHistoryInputSchema),
				z.lazy(() => UserUncheckedUpdateWithoutEventHistoryInputSchema),
			]),
			create: z.union([
				z.lazy(() => UserCreateWithoutEventHistoryInputSchema),
				z.lazy(() => UserUncheckedCreateWithoutEventHistoryInputSchema),
			]),
			where: z.lazy(() => UserWhereInputSchema).optional(),
		})
		.strict()

export default UserUpsertWithoutEventHistoryInputSchema
