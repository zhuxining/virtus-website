import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'

export const EssayCountOutputTypeSelectSchema: z.ZodType<Prisma.EssayCountOutputTypeSelect> =
	z
		.object({
			audit: z.boolean().optional(),
			EssayLike: z.boolean().optional(),
		})
		.strict()

export default EssayCountOutputTypeSelectSchema
