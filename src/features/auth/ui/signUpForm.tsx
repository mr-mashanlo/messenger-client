import { FC, FormEvent, useState } from 'react';
import { HTTPError } from 'ky';
import { useNavigate } from 'react-router-dom';
import { ZodError } from 'zod';

import { signUp } from '@/entities/auth/api';
import { ErrorResponseType, ErrorZodType, validateAuthResponse, validateSignUpFormData } from '@/entities/auth/model';
import { SignUpForm } from '@/entities/auth/ui';
import { useAuthMediator } from '@/shared/hook';

const ConnectedSignUpForm: FC = () => {
  const navigate = useNavigate();
  const { login } = useAuthMediator();
  const [ error, setError ] = useState( { name: '', message: '' } );

  async function handleFormSubmit( e: FormEvent<HTMLFormElement> ) {
    try {
      e.preventDefault();
      const formData = new FormData( e.currentTarget );
      const fields = validateSignUpFormData( formData );
      const response = await signUp( fields.email, fields.password, fields.confirm );
      const result = validateAuthResponse( response );
      login( result.id );
      navigate( '/' );
    } catch ( error ) {
      if ( error instanceof HTTPError ) {
        const errorResponse: ErrorResponseType = await error.response.json();
        setError( { name: errorResponse.name, message: errorResponse.message } );
      } else if ( error instanceof ZodError ) {
        const errorResponse: ErrorZodType = JSON.parse( error.message );
        setError( { name: errorResponse[0].validation, message: errorResponse[0].message } );
      }
    }
  };

  return <SignUpForm onSubmit={e => handleFormSubmit( e )} error={error} />;
};

export default ConnectedSignUpForm;