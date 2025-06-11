import { z } from 'zod';

export const AuditStatusSchema = z.enum(['PENDING','APPROVED','REJECTED']);

export type AuditStatusType = `${z.infer<typeof AuditStatusSchema>}`

export default AuditStatusSchema;
