import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { UserUpdateWithoutDonorInfoInputSchema } from './UserUpdateWithoutDonorInfoInputSchema'
import { UserUncheckedUpdateWithoutDonorInfoInputSchema } from './UserUncheckedUpdateWithoutDonorInfoInputSchema'
import { UserCreateWithoutDonorInfoInputSchema } from './UserCreateWithoutDonorInfoInputSchema'
import { UserUncheckedCreateWithoutDonorInfoInputSchema } from './UserUncheckedCreateWithoutDonorInfoInputSchema'
import { UserWhereInputSchema } from './UserWhereInputSchema'

export const UserUpsertWithoutDonorInfoInputSchema: z.ZodType<Prisma.UserUpsertWithoutDonorInfoInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => UserUpdateWithoutDonorInfoInputSchema),
				z.lazy(() => UserUncheckedUpdateWithoutDonorInfoInputSchema),
			]),
			create: z.union([
				z.lazy(() => UserCreateWithoutDonorInfoInputSchema),
				z.lazy(() => UserUncheckedCreateWithoutDonorInfoInputSchema),
			]),
			where: z.lazy(() => UserWhereInputSchema).optional(),
		})
		.strict()

export default UserUpsertWithoutDonorInfoInputSchema
