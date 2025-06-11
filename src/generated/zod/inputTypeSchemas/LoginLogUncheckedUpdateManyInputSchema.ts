import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'

export const LoginLogUncheckedUpdateManyInputSchema: z.ZodType<Prisma.LoginLogUncheckedUpdateManyInput> =
	z
		.object({
			id: z
				.union([
					z.number().int(),
					z.lazy(() => IntFieldUpdateOperationsInputSchema),
				])
				.optional(),
			userId: z
				.union([
					z.string(),
					z.lazy(() => StringFieldUpdateOperationsInputSchema),
				])
				.optional(),
			ip: z
				.union([
					z.string(),
					z.lazy(() => StringFieldUpdateOperationsInputSchema),
				])
				.optional(),
			userAgent: z
				.union([
					z.string(),
					z.lazy(() => StringFieldUpdateOperationsInputSchema),
				])
				.optional(),
			createdAt: z
				.union([
					z.coerce.date(),
					z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
				])
				.optional(),
			updatedAt: z
				.union([
					z.coerce.date(),
					z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
				])
				.optional(),
		})
		.strict()

export default LoginLogUncheckedUpdateManyInputSchema
