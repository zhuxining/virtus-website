import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { UserCreateWithoutDonorInfoInputSchema } from './UserCreateWithoutDonorInfoInputSchema'
import { UserUncheckedCreateWithoutDonorInfoInputSchema } from './UserUncheckedCreateWithoutDonorInfoInputSchema'
import { UserCreateOrConnectWithoutDonorInfoInputSchema } from './UserCreateOrConnectWithoutDonorInfoInputSchema'
import { UserUpsertWithoutDonorInfoInputSchema } from './UserUpsertWithoutDonorInfoInputSchema'
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema'
import { UserUpdateToOneWithWhereWithoutDonorInfoInputSchema } from './UserUpdateToOneWithWhereWithoutDonorInfoInputSchema'
import { UserUpdateWithoutDonorInfoInputSchema } from './UserUpdateWithoutDonorInfoInputSchema'
import { UserUncheckedUpdateWithoutDonorInfoInputSchema } from './UserUncheckedUpdateWithoutDonorInfoInputSchema'

export const UserUpdateOneRequiredWithoutDonorInfoNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutDonorInfoNestedInput> =
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
			upsert: z.lazy(() => UserUpsertWithoutDonorInfoInputSchema).optional(),
			connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => UserUpdateToOneWithWhereWithoutDonorInfoInputSchema),
					z.lazy(() => UserUpdateWithoutDonorInfoInputSchema),
					z.lazy(() => UserUncheckedUpdateWithoutDonorInfoInputSchema),
				])
				.optional(),
		})
		.strict()

export default UserUpdateOneRequiredWithoutDonorInfoNestedInputSchema
