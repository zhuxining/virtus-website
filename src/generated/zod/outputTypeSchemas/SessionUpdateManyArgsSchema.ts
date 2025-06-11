import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { SessionUpdateManyMutationInputSchema } from '../inputTypeSchemas/SessionUpdateManyMutationInputSchema'
import { SessionUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/SessionUncheckedUpdateManyInputSchema'
import { SessionWhereInputSchema } from '../inputTypeSchemas/SessionWhereInputSchema'

export const SessionUpdateManyArgsSchema: z.ZodType<Prisma.SessionUpdateManyArgs> =
	z
		.object({
			data: z.union([
				SessionUpdateManyMutationInputSchema,
				SessionUncheckedUpdateManyInputSchema,
			]),
			where: SessionWhereInputSchema.optional(),
			limit: z.number().optional(),
		})
		.strict()

export default SessionUpdateManyArgsSchema
