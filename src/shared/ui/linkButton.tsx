import { FC, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

interface BaseType extends LinkProps {
  to: string,
  children: ReactNode
}

interface BorderedType extends BaseType {
  display: 'bordered',
  theme: 'default' | 'white',
}

interface NakedType extends BaseType {
  display: 'naked'
}

type Props = BorderedType | NakedType

const LinkButton: FC<Props> = ( props ) => {
  if ( props.display === 'bordered' ) {
    const { to, children, theme, ...others } = props;
    return (
      <Link {...others} to={to} className={twMerge( 'min-w-[8rem] inline-block px-3 py-2 border rounded-md text-center', theme === 'white' ? 'text-black bg-white border-white' : 'border-zinc-800' )}>
        {children}
      </Link>
    );
  } else {
    const { to, children, ...others } = props;
    return (
      <Link {...others} to={to}>
        {children}
      </Link>
    );
  }
};

export default LinkButton;