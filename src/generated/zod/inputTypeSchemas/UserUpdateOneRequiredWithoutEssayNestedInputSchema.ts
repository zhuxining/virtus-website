import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { UserCreateWithoutEssayInputSchema } from './UserCreateWithoutEssayInputSchema'
import { UserUncheckedCreateWithoutEssayInputSchema } from './UserUncheckedCreateWithoutEssayInputSchema'
import { UserCreateOrConnectWithoutEssayInputSchema } from './UserCreateOrConnectWithoutEssayInputSchema'
import { UserUpsertWithoutEssayInputSchema } from './UserUpsertWithoutEssayInputSchema'
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema'
import { UserUpdateToOneWithWhereWithoutEssayInputSchema } from './UserUpdateToOneWithWhereWithoutEssayInputSchema'
import { UserUpdateWithoutEssayInputSchema } from './UserUpdateWithoutEssayInputSchema'
import { UserUncheckedUpdateWithoutEssayInputSchema } from './UserUncheckedUpdateWithoutEssayInputSchema'

export const UserUpdateOneRequiredWithoutEssayNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutEssayNestedInput> =
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
			upsert: z.lazy(() => UserUpsertWithoutEssayInputSchema).optional(),
			connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => UserUpdateToOneWithWhereWithoutEssayInputSchema),
					z.lazy(() => UserUpdateWithoutEssayInputSchema),
					z.lazy(() => UserUncheckedUpdateWithoutEssayInputSchema),
				])
				.optional(),
		})
		.strict()

export default UserUpdateOneRequiredWithoutEssayNestedInputSchema
