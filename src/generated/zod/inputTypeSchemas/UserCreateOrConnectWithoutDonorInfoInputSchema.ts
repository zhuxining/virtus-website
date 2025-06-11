import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema'
import { UserCreateWithoutDonorInfoInputSchema } from './UserCreateWithoutDonorInfoInputSchema'
import { UserUncheckedCreateWithoutDonorInfoInputSchema } from './UserUncheckedCreateWithoutDonorInfoInputSchema'

export const UserCreateOrConnectWithoutDonorInfoInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutDonorInfoInput> =
	z
		.object({
			where: z.lazy(() => UserWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => UserCreateWithoutDonorInfoInputSchema),
				z.lazy(() => UserUncheckedCreateWithoutDonorInfoInputSchema),
			]),
		})
		.strict()

export default UserCreateOrConnectWithoutDonorInfoInputSchema
