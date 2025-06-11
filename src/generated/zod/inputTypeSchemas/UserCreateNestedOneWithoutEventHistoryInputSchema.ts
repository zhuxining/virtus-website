import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { UserCreateWithoutEventHistoryInputSchema } from './UserCreateWithoutEventHistoryInputSchema'
import { UserUncheckedCreateWithoutEventHistoryInputSchema } from './UserUncheckedCreateWithoutEventHistoryInputSchema'
import { UserCreateOrConnectWithoutEventHistoryInputSchema } from './UserCreateOrConnectWithoutEventHistoryInputSchema'
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema'

export const UserCreateNestedOneWithoutEventHistoryInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutEventHistoryInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => UserCreateWithoutEventHistoryInputSchema),
					z.lazy(() => UserUncheckedCreateWithoutEventHistoryInputSchema),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => UserCreateOrConnectWithoutEventHistoryInputSchema)
				.optional(),
			connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
		})
		.strict()

export default UserCreateNestedOneWithoutEventHistoryInputSchema
