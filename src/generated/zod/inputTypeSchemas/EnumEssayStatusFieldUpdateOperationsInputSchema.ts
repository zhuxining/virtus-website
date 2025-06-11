import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { EssayStatusSchema } from './EssayStatusSchema'

export const EnumEssayStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumEssayStatusFieldUpdateOperationsInput> =
	z
		.object({
			set: z.lazy(() => EssayStatusSchema).optional(),
		})
		.strict()

export default EnumEssayStatusFieldUpdateOperationsInputSchema
