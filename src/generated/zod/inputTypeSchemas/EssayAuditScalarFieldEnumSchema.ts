import { z } from 'zod';

export const EssayAuditScalarFieldEnumSchema = z.enum(['id','essayId','auditStatus','auditMsg','operatorId','createdAt','updatedAt']);

export default EssayAuditScalarFieldEnumSchema;
