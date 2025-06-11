import { z } from 'zod';

export const EssayScalarFieldEnumSchema = z.enum(['id','title','banner','content','authorId','status','createdAt','updatedAt']);

export default EssayScalarFieldEnumSchema;
