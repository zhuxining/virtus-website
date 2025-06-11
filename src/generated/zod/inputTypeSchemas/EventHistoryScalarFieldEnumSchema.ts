import { z } from 'zod';

export const EventHistoryScalarFieldEnumSchema = z.enum(['id','title','description','content','banner','operatorId','createdAt','updatedAt']);

export default EventHistoryScalarFieldEnumSchema;
