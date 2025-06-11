import { z } from 'zod';

/////////////////////////////////////////
// EVENT HISTORY SCHEMA
/////////////////////////////////////////

export const EventHistorySchema = z.object({
  id: z.number().int(),
  title: z.string(),
  description: z.string(),
  content: z.string(),
  banner: z.string(),
  operatorId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type EventHistory = z.infer<typeof EventHistorySchema>

export default EventHistorySchema;
