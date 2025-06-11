import { z } from 'zod'
import type { Prisma } from '@/generated/prisma'
import { EssayUpdateManyMutationInputSchema } from '../inputTypeSchemas/EssayUpdateManyMutationInputSchema'
import { EssayUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/EssayUncheckedUpdateManyInputSchema'
import { EssayWhereInputSchema } from '../inputTypeSchemas/EssayWhereInputSchema'

export const EssayUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.EssayUpdateManyAndReturnArgs> =
	z
		.object({
			data: z.union([
				EssayUpdateManyMutationInputSchema,
				EssayUncheckedUpdateManyInputSchema,
			]),
			where: EssayWhereInputSchema.optional(),
			limit: z.number().optional(),
		})
		.strict()

export default EssayUpdateManyAndReturnArgsSchema
