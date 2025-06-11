import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { UserCreateWithoutEventHistoryInputSchema } from './UserCreateWithoutEventHistoryInputSchema'
import { UserUncheckedCreateWithoutEventHistoryInputSchema } from './UserUncheckedCreateWithoutEventHistoryInputSchema'
import { UserCreateOrConnectWithoutEventHistoryInputSchema } from './UserCreateOrConnectWithoutEventHistoryInputSchema'
import { UserUpsertWithoutEventHistoryInputSchema } from './UserUpsertWithoutEventHistoryInputSchema'
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema'
import { UserUpdateToOneWithWhereWithoutEventHistoryInputSchema } from './UserUpdateToOneWithWhereWithoutEventHistoryInputSchema'
import { UserUpdateWithoutEventHistoryInputSchema } from './UserUpdateWithoutEventHistoryInputSchema'
import { UserUncheckedUpdateWithoutEventHistoryInputSchema } from './UserUncheckedUpdateWithoutEventHistoryInputSchema'

export const UserUpdateOneRequiredWithoutEventHistoryNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutEventHistoryNestedInput> =
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
			upsert: z.lazy(() => UserUpsertWithoutEventHistoryInputSchema).optional(),
			connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => UserUpdateToOneWithWhereWithoutEventHistoryInputSchema),
					z.lazy(() => UserUpdateWithoutEventHistoryInputSchema),
					z.lazy(() => UserUncheckedUpdateWithoutEventHistoryInputSchema),
				])
				.optional(),
		})
		.strict()

export default UserUpdateOneRequiredWithoutEventHistoryNestedInputSchema
