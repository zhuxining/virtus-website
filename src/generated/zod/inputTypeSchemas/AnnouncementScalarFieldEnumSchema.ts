import { z } from 'zod';

export const AnnouncementScalarFieldEnumSchema = z.enum(['id','content','createdAt','updatedAt']);

export default AnnouncementScalarFieldEnumSchema;
