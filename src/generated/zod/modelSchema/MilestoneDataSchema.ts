import { z } from 'zod';

/////////////////////////////////////////
// MILESTONE DATA SCHEMA
/////////////////////////////////////////

export const MilestoneDataSchema = z.object({
  id: z.number().int(),
  startYear: z.number().int(),
  studentCount: z.number().int(),
  cityCount: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type MilestoneData = z.infer<typeof MilestoneDataSchema>

export default MilestoneDataSchema;
