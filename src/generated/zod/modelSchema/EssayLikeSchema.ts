import { z } from 'zod';

/////////////////////////////////////////
// ESSAY LIKE SCHEMA
/////////////////////////////////////////

export const EssayLikeSchema = z.object({
  id: z.number().int(),
  essayId: z.number().int(),
  operatorId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type EssayLike = z.infer<typeof EssayLikeSchema>

export default EssayLikeSchema;
