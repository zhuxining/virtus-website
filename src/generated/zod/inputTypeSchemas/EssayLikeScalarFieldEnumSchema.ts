import { z } from 'zod';

export const EssayLikeScalarFieldEnumSchema = z.enum(['id','essayId','operatorId','createdAt','updatedAt']);

export default EssayLikeScalarFieldEnumSchema;
