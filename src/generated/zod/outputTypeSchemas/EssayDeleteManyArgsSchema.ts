import { z } from 'zod'
import type { Prisma } from '@/generated/prisma'
import { EssayWhereInputSchema } from '../inputTypeSchemas/EssayWhereInputSchema'

export const EssayDeleteManyArgsSchema: z.ZodType<Prisma.EssayDeleteManyArgs> =
	z
		.object({
			where: EssayWhereInputSchema.optional(),
			limit: z.number().optional(),
		})
		.strict()

export default EssayDeleteManyArgsSchema
