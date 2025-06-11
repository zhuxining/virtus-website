import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { EssayCreateWithoutAuthorInputSchema } from './EssayCreateWithoutAuthorInputSchema'
import { EssayUncheckedCreateWithoutAuthorInputSchema } from './EssayUncheckedCreateWithoutAuthorInputSchema'
import { EssayCreateOrConnectWithoutAuthorInputSchema } from './EssayCreateOrConnectWithoutAuthorInputSchema'
import { EssayUpsertWithWhereUniqueWithoutAuthorInputSchema } from './EssayUpsertWithWhereUniqueWithoutAuthorInputSchema'
import { EssayCreateManyAuthorInputEnvelopeSchema } from './EssayCreateManyAuthorInputEnvelopeSchema'
import { EssayWhereUniqueInputSchema } from './EssayWhereUniqueInputSchema'
import { EssayUpdateWithWhereUniqueWithoutAuthorInputSchema } from './EssayUpdateWithWhereUniqueWithoutAuthorInputSchema'
import { EssayUpdateManyWithWhereWithoutAuthorInputSchema } from './EssayUpdateManyWithWhereWithoutAuthorInputSchema'
import { EssayScalarWhereInputSchema } from './EssayScalarWhereInputSchema'

export const EssayUpdateManyWithoutAuthorNestedInputSchema: z.ZodType<Prisma.EssayUpdateManyWithoutAuthorNestedInput> =
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
			upsert: z
				.union([
					z.lazy(() => EssayUpsertWithWhereUniqueWithoutAuthorInputSchema),
					z
						.lazy(() => EssayUpsertWithWhereUniqueWithoutAuthorInputSchema)
						.array(),
				])
				.optional(),
			createMany: z
				.lazy(() => EssayCreateManyAuthorInputEnvelopeSchema)
				.optional(),
			set: z
				.union([
					z.lazy(() => EssayWhereUniqueInputSchema),
					z.lazy(() => EssayWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => EssayWhereUniqueInputSchema),
					z.lazy(() => EssayWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => EssayWhereUniqueInputSchema),
					z.lazy(() => EssayWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => EssayWhereUniqueInputSchema),
					z.lazy(() => EssayWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => EssayUpdateWithWhereUniqueWithoutAuthorInputSchema),
					z
						.lazy(() => EssayUpdateWithWhereUniqueWithoutAuthorInputSchema)
						.array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => EssayUpdateManyWithWhereWithoutAuthorInputSchema),
					z
						.lazy(() => EssayUpdateManyWithWhereWithoutAuthorInputSchema)
						.array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => EssayScalarWhereInputSchema),
					z.lazy(() => EssayScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict()

export default EssayUpdateManyWithoutAuthorNestedInputSchema
