import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { RoleSchema } from './RoleSchema'

export const EnumRoleFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumRoleFieldUpdateOperationsInput> =
	z
		.object({
			set: z.lazy(() => RoleSchema).optional(),
		})
		.strict()

export default EnumRoleFieldUpdateOperationsInputSchema
