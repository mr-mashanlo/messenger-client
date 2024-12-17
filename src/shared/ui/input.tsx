import { FC, InputHTMLAttributes } from 'react';
import { Description, Field, Input as HeadlessInput, Label } from '@headlessui/react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string,
  description: string
}

const Input: FC<Props> = ( { label, description, ...others } ) => {
  return (
    <Field>
      <Label>{label}</Label>
      <Description>{description}</Description>
      <HeadlessInput {...others} />
    </Field>
  );
};

export default Input;