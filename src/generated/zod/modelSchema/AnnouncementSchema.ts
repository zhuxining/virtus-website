import { z } from 'zod';

/////////////////////////////////////////
// ANNOUNCEMENT SCHEMA
/////////////////////////////////////////

export const AnnouncementSchema = z.object({
  id: z.number().int(),
  content: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Announcement = z.infer<typeof AnnouncementSchema>

export default AnnouncementSchema;
