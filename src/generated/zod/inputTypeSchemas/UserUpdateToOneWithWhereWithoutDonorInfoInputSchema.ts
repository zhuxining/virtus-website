import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { UserWhereInputSchema } from './UserWhereInputSchema'
import { UserUpdateWithoutDonorInfoInputSchema } from './UserUpdateWithoutDonorInfoInputSchema'
import { UserUncheckedUpdateWithoutDonorInfoInputSchema } from './UserUncheckedUpdateWithoutDonorInfoInputSchema'

export const UserUpdateToOneWithWhereWithoutDonorInfoInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutDonorInfoInput> =
	z
		.object({
			where: z.lazy(() => UserWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => UserUpdateWithoutDonorInfoInputSchema),
				z.lazy(() => UserUncheckedUpdateWithoutDonorInfoInputSchema),
			]),
		})
		.strict()

export default UserUpdateToOneWithWhereWithoutDonorInfoInputSchema
