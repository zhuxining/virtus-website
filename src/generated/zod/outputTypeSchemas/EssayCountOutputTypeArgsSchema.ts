import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { EssayCountOutputTypeSelectSchema } from './EssayCountOutputTypeSelectSchema'

export const EssayCountOutputTypeArgsSchema: z.ZodType<Prisma.EssayCountOutputTypeDefaultArgs> =
	z
		.object({
			select: z.lazy(() => EssayCountOutputTypeSelectSchema).nullish(),
		})
		.strict()

export default EssayCountOutputTypeSelectSchema
