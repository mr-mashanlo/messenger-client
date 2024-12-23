import { UserResponseSchema, UserSchema } from './schema';

export function validateUserFormData( formData: FormData ) {
  const fields = Object.fromEntries( formData.entries() );
  const result = UserSchema.safeParse( fields );
  if ( !result.success ) {
    throw result.error;
  }
  return result.data;
};

export function validateUserResponse( formData: FormData ) {
  const fields = Object.fromEntries( formData.entries() );
  const result = UserResponseSchema.safeParse( fields );
  if ( !result.success ) {
    throw result.error;
  }
  return result.data;
};