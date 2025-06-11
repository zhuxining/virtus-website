import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { UserCreateWithoutEssayLikeInputSchema } from './UserCreateWithoutEssayLikeInputSchema'
import { UserUncheckedCreateWithoutEssayLikeInputSchema } from './UserUncheckedCreateWithoutEssayLikeInputSchema'
import { UserCreateOrConnectWithoutEssayLikeInputSchema } from './UserCreateOrConnectWithoutEssayLikeInputSchema'
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema'

export const UserCreateNestedOneWithoutEssayLikeInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutEssayLikeInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => UserCreateWithoutEssayLikeInputSchema),
					z.lazy(() => UserUncheckedCreateWithoutEssayLikeInputSchema),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => UserCreateOrConnectWithoutEssayLikeInputSchema)
				.optional(),
			connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
		})
		.strict()

export default UserCreateNestedOneWithoutEssayLikeInputSchema
