import { z } from 'zod';

/////////////////////////////////////////
// DONOR INFO SCHEMA
/////////////////////////////////////////

export const DonorInfoSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  avatar: z.string().nullable(),
  description: z.string().nullable(),
  donationAmount: z.number().int().nullable(),
  donationDate: z.coerce.date(),
  operatorId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type DonorInfo = z.infer<typeof DonorInfoSchema>

export default DonorInfoSchema;
