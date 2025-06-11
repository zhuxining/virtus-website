import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { EventHistoryIncludeSchema } from '../inputTypeSchemas/EventHistoryIncludeSchema'
import { EventHistoryWhereInputSchema } from '../inputTypeSchemas/EventHistoryWhereInputSchema'
import { EventHistoryOrderByWithRelationInputSchema } from '../inputTypeSchemas/EventHistoryOrderByWithRelationInputSchema'
import { EventHistoryWhereUniqueInputSchema } from '../inputTypeSchemas/EventHistoryWhereUniqueInputSchema'
import { EventHistoryScalarFieldEnumSchema } from '../inputTypeSchemas/EventHistoryScalarFieldEnumSchema'
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EventHistorySelectSchema: z.ZodType<Prisma.EventHistorySelect> = z
	.object({
		id: z.boolean().optional(),
		title: z.boolean().optional(),
		description: z.boolean().optional(),
		content: z.boolean().optional(),
		banner: z.boolean().optional(),
		operatorId: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		operator: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
	})
	.strict()

export const EventHistoryFindFirstOrThrowArgsSchema: z.ZodType<Prisma.EventHistoryFindFirstOrThrowArgs> =
	z
		.object({
			select: EventHistorySelectSchema.optional(),
			include: z.lazy(() => EventHistoryIncludeSchema).optional(),
			where: EventHistoryWhereInputSchema.optional(),
			orderBy: z
				.union([
					EventHistoryOrderByWithRelationInputSchema.array(),
					EventHistoryOrderByWithRelationInputSchema,
				])
				.optional(),
			cursor: EventHistoryWhereUniqueInputSchema.optional(),
			take: z.number().optional(),
			skip: z.number().optional(),
			distinct: z
				.union([
					EventHistoryScalarFieldEnumSchema,
					EventHistoryScalarFieldEnumSchema.array(),
				])
				.optional(),
		})
		.strict()

export default EventHistoryFindFirstOrThrowArgsSchema
