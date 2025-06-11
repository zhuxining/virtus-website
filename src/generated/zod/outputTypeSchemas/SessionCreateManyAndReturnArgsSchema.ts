import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { SessionCreateManyInputSchema } from '../inputTypeSchemas/SessionCreateManyInputSchema'

export const SessionCreateManyAndReturnArgsSchema: z.ZodType<Prisma.SessionCreateManyAndReturnArgs> =
	z
		.object({
			data: z.union([
				SessionCreateManyInputSchema,
				SessionCreateManyInputSchema.array(),
			]),
		})
		.strict()

export default SessionCreateManyAndReturnArgsSchema
