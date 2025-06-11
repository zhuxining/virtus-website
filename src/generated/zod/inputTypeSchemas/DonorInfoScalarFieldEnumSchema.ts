import { z } from 'zod';

export const DonorInfoScalarFieldEnumSchema = z.enum(['id','name','avatar','description','donationAmount','donationDate','operatorId','createdAt','updatedAt']);

export default DonorInfoScalarFieldEnumSchema;
