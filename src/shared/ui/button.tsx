import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { Button as HeadlessButton } from '@headlessui/react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

const Button: FC<Props> = ( { children, ...others } ) => {
  return <HeadlessButton {...others}>{children}</HeadlessButton>;
};

export default Button;