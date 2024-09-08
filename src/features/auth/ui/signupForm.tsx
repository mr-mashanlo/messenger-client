import { FC, useEffect, useState } from 'react';
import { Form, Link, useActionData, useNavigate, useNavigation } from 'react-router-dom';
import { Button, Input } from '@/shared/ui';

const SignupForm: FC = () => {
  const navigation = useNavigation();
  const navigate = useNavigate();
  const actionData = useActionData() as { success: boolean, error?: { errors: Array<{ path: string, msg: string }> } };

  const [ errorName, setErrorName ] = useState( '' );
  const [ errorMessage, setErrorMessage ] = useState( '' );

  useEffect( () => {
    if ( !actionData ) {
      return;
    }
    if ( actionData.success ) {
      return navigate( '/' );
    }
    setErrorName( actionData.error ? actionData.error.errors[0].path : '' );
    setErrorMessage( actionData.error ? actionData.error.errors[0].msg : '' );
  }, [ actionData, navigate ] );

  return (
    <div className="flex flex-col gap-7">
      <Form method="post" className="flex flex-col gap-7">
        <Input onChange={() => {setErrorName( '' ); setErrorMessage( '' );}} id="email" label={errorName === 'email' ? errorMessage : 'Email'} type="text" placeholder="one@company.com" required />
        <Input onChange={() => {setErrorName( '' ); setErrorMessage( '' );}} id="password" label={errorName === 'password' ? errorMessage : 'Password'} type="password" placeholder="••••••••" required />
        <Input onChange={() => {setErrorName( '' ); setErrorMessage( '' );}} id="confirm" label={errorName === 'confirm' ? errorMessage : 'Confirm'} type="password" placeholder="••••••••" required />
        <Button loading={navigation.state === 'submitting'}>Sign up</Button>
      </Form>
      <p className="text-center">Already have an account? <Link to="/signin" className="hover:underline"><b>Sign in</b></Link></p>
    </div>
  );
};

export default SignupForm;