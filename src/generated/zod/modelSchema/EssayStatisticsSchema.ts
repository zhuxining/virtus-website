import { z } from 'zod';

/////////////////////////////////////////
// ESSAY STATISTICS SCHEMA
/////////////////////////////////////////

export const EssayStatisticsSchema = z.object({
  id: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type EssayStatistics = z.infer<typeof EssayStatisticsSchema>

export default EssayStatisticsSchema;
