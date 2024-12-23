import { FC, FormHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { Button, Description, Field, Fieldset, Input, Label, Legend } from '@headlessui/react';

interface Props extends FormHTMLAttributes<HTMLFormElement> {
  error?: { name: string, message: string }
}

const SignInForm: FC<Props> = ( { error, ...others } ) => {
  return (
    <form {...others}>
      <Fieldset>
        <Legend className="font-semibold text-center">Sign in</Legend>
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
        <Button type="submit" className="w-full px-3 py-2 mt-8 outline-none bg-black text-white border border-black rounded-md">Sign in</Button>
        <p className="mt-8 text-center">Create a new account? <Link to="/signup" className="hover:underline"><b>Sign up</b></Link></p>
      </Fieldset>
    </form>
  );
};

export default SignInForm;