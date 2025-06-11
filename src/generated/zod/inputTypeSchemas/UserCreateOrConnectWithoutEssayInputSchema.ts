import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema'
import { UserCreateWithoutEssayInputSchema } from './UserCreateWithoutEssayInputSchema'
import { UserUncheckedCreateWithoutEssayInputSchema } from './UserUncheckedCreateWithoutEssayInputSchema'

export const UserCreateOrConnectWithoutEssayInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutEssayInput> =
	z
		.object({
			where: z.lazy(() => UserWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => UserCreateWithoutEssayInputSchema),
				z.lazy(() => UserUncheckedCreateWithoutEssayInputSchema),
			]),
		})
		.strict()

export default UserCreateOrConnectWithoutEssayInputSchema
