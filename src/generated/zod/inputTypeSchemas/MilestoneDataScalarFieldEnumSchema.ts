import { z } from 'zod';

export const MilestoneDataScalarFieldEnumSchema = z.enum(['id','startYear','studentCount','cityCount','createdAt','updatedAt']);

export default MilestoneDataScalarFieldEnumSchema;
