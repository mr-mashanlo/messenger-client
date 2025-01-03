import { AuthResponseSchema, SigninSchema, SignupSchema } from '../types/authSchema';
import { UsersResponseSchema } from '../types/userSchema';

export function validateSigninData( data: FormData ) {
  const fields = Object.fromEntries( data.entries() );
  return SigninSchema.parse( fields );
};

export function validateSignupData( data: FormData ) {
  const fields = Object.fromEntries( data.entries() );
  return SignupSchema.parse( fields );
};

export function validateAuthResponse( data: unknown ) {
  return AuthResponseSchema.parse( data );
}

export function validateUsersResponse( data: unknown ) {
  return UsersResponseSchema.parse( data );
}