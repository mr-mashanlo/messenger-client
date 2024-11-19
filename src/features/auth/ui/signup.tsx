import { FC, FormEvent, useState } from 'react';
import { HTTPError } from 'ky';
import { useNavigate } from 'react-router-dom';
import { ZodError } from 'zod';

import { signup } from '@/entities/auth/api';
import { ErrorResponseType, ErrorZodType, useAuthStore, validateAuthResponse, validateSignUpFormData } from '@/entities/auth/model';
import { Button, Input } from '@/shared/ui';

const SignUpForm: FC = () => {
  const navigate = useNavigate();
  const setID = useAuthStore( state => state.setID );
  const [ error, setError ] = useState( { name: '', message: '' } );

  async function handleFormSubmit( e: FormEvent<HTMLFormElement> ) {
    e.preventDefault();
    const formData = new FormData( e.currentTarget );
    try {
      const fields = validateSignUpFormData( formData );
      const response = await signup( fields.email, fields.password, fields.confirm );
      const result = validateAuthResponse( response );
      setID( result.id );
      navigate( '/' );
    } catch ( error ) {
      if ( error instanceof HTTPError ) {
        const errorResponse: ErrorResponseType = await error.response.json();
        setError( { name: errorResponse.name, message: errorResponse.message } );
      } else if ( error instanceof ZodError ) {
        const errorResponse: ErrorZodType = JSON.parse( error.message );
        setError( { name: errorResponse[0].validation, message: errorResponse[0].message } );
      } else {
        console.error( error );
      }
    }
  };

  return (
    <form onSubmit={e => handleFormSubmit( e )} className="flex flex-col gap-7">
      <Input display="framed" name="email" label={'Email'} varning={error.name === 'email' ? error.message : ''} type="text" placeholder="one@company.com" required />
      <Input display="framed" name="password" label={'Password'} varning={error.name === 'password' ? error.message : ''} type="password" placeholder="••••••••" required />
      <Input display="framed" name="confirm" label={'Confirm password'} varning={error.name === 'confirm' ? error.message : ''} type="password" placeholder="••••••••" required />
      <Button display="bordered" theme="default">Sign up</Button>
    </form>
  );
};

export default SignUpForm;