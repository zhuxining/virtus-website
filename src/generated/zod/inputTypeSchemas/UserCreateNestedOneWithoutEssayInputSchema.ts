import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { UserCreateWithoutEssayInputSchema } from './UserCreateWithoutEssayInputSchema'
import { UserUncheckedCreateWithoutEssayInputSchema } from './UserUncheckedCreateWithoutEssayInputSchema'
import { UserCreateOrConnectWithoutEssayInputSchema } from './UserCreateOrConnectWithoutEssayInputSchema'
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema'

export const UserCreateNestedOneWithoutEssayInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutEssayInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => UserCreateWithoutEssayInputSchema),
					z.lazy(() => UserUncheckedCreateWithoutEssayInputSchema),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => UserCreateOrConnectWithoutEssayInputSchema)
				.optional(),
			connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
		})
		.strict()

export default UserCreateNestedOneWithoutEssayInputSchema
