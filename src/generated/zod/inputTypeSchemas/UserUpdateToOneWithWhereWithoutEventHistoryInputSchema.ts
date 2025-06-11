import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { UserWhereInputSchema } from './UserWhereInputSchema'
import { UserUpdateWithoutEventHistoryInputSchema } from './UserUpdateWithoutEventHistoryInputSchema'
import { UserUncheckedUpdateWithoutEventHistoryInputSchema } from './UserUncheckedUpdateWithoutEventHistoryInputSchema'

export const UserUpdateToOneWithWhereWithoutEventHistoryInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutEventHistoryInput> =
	z
		.object({
			where: z.lazy(() => UserWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => UserUpdateWithoutEventHistoryInputSchema),
				z.lazy(() => UserUncheckedUpdateWithoutEventHistoryInputSchema),
			]),
		})
		.strict()

export default UserUpdateToOneWithWhereWithoutEventHistoryInputSchema
