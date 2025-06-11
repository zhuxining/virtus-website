import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { UserCreateWithoutDonorInfoInputSchema } from './UserCreateWithoutDonorInfoInputSchema'
import { UserUncheckedCreateWithoutDonorInfoInputSchema } from './UserUncheckedCreateWithoutDonorInfoInputSchema'
import { UserCreateOrConnectWithoutDonorInfoInputSchema } from './UserCreateOrConnectWithoutDonorInfoInputSchema'
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema'

export const UserCreateNestedOneWithoutDonorInfoInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutDonorInfoInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => UserCreateWithoutDonorInfoInputSchema),
					z.lazy(() => UserUncheckedCreateWithoutDonorInfoInputSchema),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => UserCreateOrConnectWithoutDonorInfoInputSchema)
				.optional(),
			connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
		})
		.strict()

export default UserCreateNestedOneWithoutDonorInfoInputSchema
