import { AuthResponseSchema, SignInSchema, SignUpSchema } from './schema';

export function validateSignInFormData( formData: FormData ) {
  const fields = Object.fromEntries( formData.entries() );
  const result = SignInSchema.safeParse( fields );
  if ( !result.success ) {
    throw result.error;
  }
  return result.data;
};

export function validateSignUpFormData( formData: FormData ) {
  const fields = Object.fromEntries( formData.entries() );
  const result = SignUpSchema.safeParse( fields );
  if ( !result.success ) {
    throw result.error;
  }
  return result.data;
};

export function validateAuthResponse( responseData: unknown ) {
  const result = AuthResponseSchema.safeParse( responseData );
  if ( !result.success ) {
    throw result.error;
  }
  return result.data;
}