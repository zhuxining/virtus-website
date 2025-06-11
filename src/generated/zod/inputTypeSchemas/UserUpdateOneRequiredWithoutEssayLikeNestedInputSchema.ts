import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { UserCreateWithoutEssayLikeInputSchema } from './UserCreateWithoutEssayLikeInputSchema'
import { UserUncheckedCreateWithoutEssayLikeInputSchema } from './UserUncheckedCreateWithoutEssayLikeInputSchema'
import { UserCreateOrConnectWithoutEssayLikeInputSchema } from './UserCreateOrConnectWithoutEssayLikeInputSchema'
import { UserUpsertWithoutEssayLikeInputSchema } from './UserUpsertWithoutEssayLikeInputSchema'
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema'
import { UserUpdateToOneWithWhereWithoutEssayLikeInputSchema } from './UserUpdateToOneWithWhereWithoutEssayLikeInputSchema'
import { UserUpdateWithoutEssayLikeInputSchema } from './UserUpdateWithoutEssayLikeInputSchema'
import { UserUncheckedUpdateWithoutEssayLikeInputSchema } from './UserUncheckedUpdateWithoutEssayLikeInputSchema'

export const UserUpdateOneRequiredWithoutEssayLikeNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutEssayLikeNestedInput> =
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
			upsert: z.lazy(() => UserUpsertWithoutEssayLikeInputSchema).optional(),
			connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => UserUpdateToOneWithWhereWithoutEssayLikeInputSchema),
					z.lazy(() => UserUpdateWithoutEssayLikeInputSchema),
					z.lazy(() => UserUncheckedUpdateWithoutEssayLikeInputSchema),
				])
				.optional(),
		})
		.strict()

export default UserUpdateOneRequiredWithoutEssayLikeNestedInputSchema
