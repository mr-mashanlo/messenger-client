import { FC, FormHTMLAttributes } from 'react';
import { Button, Field, Fieldset, Input } from '@headlessui/react';

interface Props extends FormHTMLAttributes<HTMLFormElement> {
  className?: string
}

const MessageForm: FC<Props> = ( { className, ...others } ) => {
  return (
    <form {...others} className={className}>
      <Fieldset className="flex items-center">
        <Field className="w-full">
          <Input type="text" name="text" className="block w-full px-3 py-2 rounded-s-md outline outline-1 outline-zinc-200 bg-transparent placeholder:text-zinc-500 focus:outline-zinc-500" required />
        </Field>
        <Button type="submit" className="px-4 py-2 rounded-e-md border-black bg-black text-white border">
          Send
        </Button>
      </Fieldset>
    </form>
  );
};

export default MessageForm;