import { FC, FormEvent, FormHTMLAttributes, useState } from 'react';
import { HTTPError } from 'ky';
import { Link, useNavigate } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { ZodError } from 'zod';
import { Button, Description, Field, Fieldset, Input, Label, Legend } from '@headlessui/react';

import { ErrorResponseType, ErrorZodType } from '@/entities/error';
import { setUserID, signupUser, validateAuthResponse, validateSignupData } from '@/entities/user';

type Props = FormHTMLAttributes<HTMLFormElement>

const SignupForm: FC<Props> = ( { ...others } ) => {
  const navigate = useNavigate();
  const [ error, setError ] = useState( { name: '', message: '' } );

  async function handleFormSubmit( e: FormEvent<HTMLFormElement> ) {
    try {
      e.preventDefault();
      const formData = new FormData( e.currentTarget );
      const fields = validateSignupData( formData );
      const response = await signupUser( fields.email, fields.password, fields.confirm );
      const result = validateAuthResponse( response );
      setUserID( result.user );
      navigate( '/' );
    } catch ( error ) {
      if ( error instanceof HTTPError ) {
        const errorResponse: ErrorResponseType = await error.response.json();
        setError( { name: errorResponse.name, message: errorResponse.message } );
      } else if ( error instanceof ZodError ) {
        const errorResponse: Array<ErrorZodType> = JSON.parse( error.message );
        setError( { name: errorResponse[0].validation, message: errorResponse[0].message } );
      }
    }
  };

  return (
    <form onSubmit={e => handleFormSubmit( e )} {...others}>
      <Fieldset>
        <Legend className="font-semibold text-center">Sign up</Legend>
        <Field className="mt-8 relative">
          <Label className="px-2 text-xs font-medium bg-white absolute -top-[0.55rem] left-3 z-10">Email</Label>
          <Input type="email" name="email" placeholder="email@company.com" className={twMerge( 'block w-full px-3 py-2 outline-none border rounded-md bg-transparent placeholder:text-zinc-500 focus:border-zinc-500', error?.name === 'email' ? 'border-red-400' : 'border-zinc-200' )} required />
          {error?.name === 'email' && <Description className="mt-1 text-xs text-red-500 absolute top-full right-0">{error?.message}</Description>}
        </Field>
        <Field className="mt-8 relative">
          <Label className="px-2 text-xs font-medium bg-white absolute -top-[0.55rem] left-3 z-10">Password</Label>
          <Input type="password" name="password" placeholder="••••••••" className={twMerge( 'block w-full px-3 py-2 outline-none border rounded-md bg-transparent placeholder:text-zinc-500 focus:border-zinc-500', error?.name === 'password' ? 'border-red-400' : 'border-zinc-200' )} required />
          {error?.name === 'password' && <Description className="mt-1 text-xs text-red-500 absolute top-full right-0">{error?.message}</Description>}
        </Field>
        <Field className="mt-8 relative">
          <Label className="px-2 text-xs font-medium bg-white absolute -top-[0.55rem] left-3 z-10">Confirm password</Label>
          <Input type="password" name="confirm" placeholder="••••••••" className={twMerge( 'block w-full px-3 py-2 outline-none border rounded-md bg-transparent placeholder:text-zinc-500 focus:border-zinc-500', error?.name === 'confirm' ? 'border-red-400' : 'border-zinc-200' )} required />
          {error?.name === 'confirm' && <Description className="mt-1 text-xs text-red-500 absolute top-full right-0">{error?.message}</Description>}
        </Field>
        <Button type="submit" className="w-full px-3 py-2 mt-8 outline-none bg-black text-white border border-black rounded-md">Sign up</Button>
        <p className="mt-8 text-center">Already have an account? <Link to="/signin" className="hover:underline"><b>Sign in</b></Link></p>
      </Fieldset>
    </form>
  );
};

export default SignupForm;