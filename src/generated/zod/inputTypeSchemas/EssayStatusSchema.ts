import { z } from 'zod';

export const EssayStatusSchema = z.enum(['DRAFT','PENDING_REVIEW','PUBLISHED','REJECTED']);

export type EssayStatusType = `${z.infer<typeof EssayStatusSchema>}`

export default EssayStatusSchema;
