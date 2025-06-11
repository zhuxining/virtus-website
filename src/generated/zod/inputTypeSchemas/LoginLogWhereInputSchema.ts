import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { IntFilterSchema } from './IntFilterSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'

export const LoginLogWhereInputSchema: z.ZodType<Prisma.LoginLogWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => LoginLogWhereInputSchema),
				z.lazy(() => LoginLogWhereInputSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => LoginLogWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => LoginLogWhereInputSchema),
				z.lazy(() => LoginLogWhereInputSchema).array(),
			])
			.optional(),
		id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		userId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		ip: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		userAgent: z
			.union([z.lazy(() => StringFilterSchema), z.string()])
			.optional(),
		createdAt: z
			.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
			.optional(),
		updatedAt: z
			.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
			.optional(),
	})
	.strict()

export default LoginLogWhereInputSchema
