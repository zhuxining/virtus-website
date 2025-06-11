import { z } from 'zod';
import { AuditStatusSchema } from '../inputTypeSchemas/AuditStatusSchema'

/////////////////////////////////////////
// ESSAY AUDIT SCHEMA
/////////////////////////////////////////

export const EssayAuditSchema = z.object({
  auditStatus: AuditStatusSchema,
  id: z.number().int(),
  essayId: z.number().int(),
  auditMsg: z.string().nullable(),
  operatorId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type EssayAudit = z.infer<typeof EssayAuditSchema>

export default EssayAuditSchema;
