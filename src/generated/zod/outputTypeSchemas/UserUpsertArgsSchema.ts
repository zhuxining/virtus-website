import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { UserIncludeSchema } from '../inputTypeSchemas/UserIncludeSchema'
import { UserWhereUniqueInputSchema } from '../inputTypeSchemas/UserWhereUniqueInputSchema'
import { UserCreateInputSchema } from '../inputTypeSchemas/UserCreateInputSchema'
import { UserUncheckedCreateInputSchema } from '../inputTypeSchemas/UserUncheckedCreateInputSchema'
import { UserUpdateInputSchema } from '../inputTypeSchemas/UserUpdateInputSchema'
import { UserUncheckedUpdateInputSchema } from '../inputTypeSchemas/UserUncheckedUpdateInputSchema'
import { SessionFindManyArgsSchema } from '../outputTypeSchemas/SessionFindManyArgsSchema'
import { AccountFindManyArgsSchema } from '../outputTypeSchemas/AccountFindManyArgsSchema'
import { EssayFindManyArgsSchema } from '../outputTypeSchemas/EssayFindManyArgsSchema'
import { EssayAuditFindManyArgsSchema } from '../outputTypeSchemas/EssayAuditFindManyArgsSchema'
import { EssayLikeFindManyArgsSchema } from '../outputTypeSchemas/EssayLikeFindManyArgsSchema'
import { EventHistoryFindManyArgsSchema } from '../outputTypeSchemas/EventHistoryFindManyArgsSchema'
import { DonorInfoFindManyArgsSchema } from '../outputTypeSchemas/DonorInfoFindManyArgsSchema'
import { UserCountOutputTypeArgsSchema } from '../outputTypeSchemas/UserCountOutputTypeArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z
	.object({
		id: z.boolean().optional(),
		name: z.boolean().optional(),
		email: z.boolean().optional(),
		emailVerified: z.boolean().optional(),
		image: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		role: z.boolean().optional(),
		sessions: z
			.union([z.boolean(), z.lazy(() => SessionFindManyArgsSchema)])
			.optional(),
		accounts: z
			.union([z.boolean(), z.lazy(() => AccountFindManyArgsSchema)])
			.optional(),
		essay: z
			.union([z.boolean(), z.lazy(() => EssayFindManyArgsSchema)])
			.optional(),
		essayAudit: z
			.union([z.boolean(), z.lazy(() => EssayAuditFindManyArgsSchema)])
			.optional(),
		essayLike: z
			.union([z.boolean(), z.lazy(() => EssayLikeFindManyArgsSchema)])
			.optional(),
		eventHistory: z
			.union([z.boolean(), z.lazy(() => EventHistoryFindManyArgsSchema)])
			.optional(),
		donorInfo: z
			.union([z.boolean(), z.lazy(() => DonorInfoFindManyArgsSchema)])
			.optional(),
		_count: z
			.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsSchema)])
			.optional(),
	})
	.strict()

export const UserUpsertArgsSchema: z.ZodType<Prisma.UserUpsertArgs> = z
	.object({
		select: UserSelectSchema.optional(),
		include: z.lazy(() => UserIncludeSchema).optional(),
		where: UserWhereUniqueInputSchema,
		create: z.union([UserCreateInputSchema, UserUncheckedCreateInputSchema]),
		update: z.union([UserUpdateInputSchema, UserUncheckedUpdateInputSchema]),
	})
	.strict()

export default UserUpsertArgsSchema
