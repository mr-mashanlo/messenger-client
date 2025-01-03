import { z } from 'zod';

export const SigninSchema = z.object( {
  email: z.string().email(),
  password: z.string().min( 8 )
} );

export const SignupSchema = z.object( {
  email: z.string().email(),
  password: z.string().min( 8 ),
  confirm: z.string().min( 8 )
} );

export const AuthResponseSchema = z.object( {
  user: z.string(),
  at: z.string()
} );

export type SigninType = z.infer<typeof SigninSchema>;

export type SignupType = z.infer<typeof SignupSchema>;

export type AuthResponseType = z.infer<typeof AuthResponseSchema>;