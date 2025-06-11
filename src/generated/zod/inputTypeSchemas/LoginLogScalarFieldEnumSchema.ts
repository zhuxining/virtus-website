import { z } from 'zod';

export const LoginLogScalarFieldEnumSchema = z.enum(['id','userId','ip','userAgent','createdAt','updatedAt']);

export default LoginLogScalarFieldEnumSchema;
