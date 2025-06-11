import { z } from 'zod';
import { EssayStatusSchema } from '../inputTypeSchemas/EssayStatusSchema'

/////////////////////////////////////////
// ESSAY SCHEMA
/////////////////////////////////////////

export const EssaySchema = z.object({
  status: EssayStatusSchema,
  id: z.number().int(),
  title: z.string(),
  banner: z.string().nullable(),
  content: z.string(),
  authorId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Essay = z.infer<typeof EssaySchema>

export default EssaySchema;
