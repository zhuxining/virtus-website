import { z } from 'zod';

/////////////////////////////////////////
// LOGIN LOG SCHEMA
/////////////////////////////////////////

export const LoginLogSchema = z.object({
  id: z.number().int(),
  userId: z.string(),
  ip: z.string(),
  userAgent: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type LoginLog = z.infer<typeof LoginLogSchema>

export default LoginLogSchema;
