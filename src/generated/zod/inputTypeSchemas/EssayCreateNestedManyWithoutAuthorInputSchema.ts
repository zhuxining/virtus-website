import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { EssayCreateWithoutAuthorInputSchema } from './EssayCreateWithoutAuthorInputSchema'
import { EssayUncheckedCreateWithoutAuthorInputSchema } from './EssayUncheckedCreateWithoutAuthorInputSchema'
import { EssayCreateOrConnectWithoutAuthorInputSchema } from './EssayCreateOrConnectWithoutAuthorInputSchema'
import { EssayCreateManyAuthorInputEnvelopeSchema } from './EssayCreateManyAuthorInputEnvelopeSchema'
import { EssayWhereUniqueInputSchema } from './EssayWhereUniqueInputSchema'

export const EssayCreateNestedManyWithoutAuthorInputSchema: z.ZodType<Prisma.EssayCreateNestedManyWithoutAuthorInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => EssayCreateWithoutAuthorInputSchema),
					z.lazy(() => EssayCreateWithoutAuthorInputSchema).array(),
					z.lazy(() => EssayUncheckedCreateWithoutAuthorInputSchema),
					z.lazy(() => EssayUncheckedCreateWithoutAuthorInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => EssayCreateOrConnectWithoutAuthorInputSchema),
					z.lazy(() => EssayCreateOrConnectWithoutAuthorInputSchema).array(),
				])
				.optional(),
			createMany: z
				.lazy(() => EssayCreateManyAuthorInputEnvelopeSchema)
				.optional(),
			connect: z
				.union([
					z.lazy(() => EssayWhereUniqueInputSchema),
					z.lazy(() => EssayWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict()

export default EssayCreateNestedManyWithoutAuthorInputSchema
