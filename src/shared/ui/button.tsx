import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface BaseType extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

interface BorderedType extends BaseType {
  display: 'bordered',
  theme: 'default' | 'white',
  loading?: boolean
}

interface NakedType extends BaseType {
  display: 'naked'
}

type Props = BorderedType | NakedType

const Button: FC<Props> = ( props ) => {
  if ( props.display === 'bordered' ) {
    const { children, theme, loading, ...others } = props;
    return (
      <button {...others} className={twMerge( 'min-w-[8rem] px-3 py-2 outline-none border rounded-md relative', theme === 'white' ? 'text-black bg-white border-white' : 'text-white bg-zinc-800 border-zinc-800' )}>
        <span className={twMerge( loading ? 'opacity-0 invisible' : 'opacity-100 visible' )}>{children}</span>
        <span className={twMerge( 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse', loading ? 'opacity-100 visible' : 'opacity-0 invisible' )}>● ● ●</span>
      </button>
    );
  } else {
    const { children, ...others } = props;
    return (
      <button {...others} className="outline-none">
        {children}
      </button>
    );
  }
};

export default Button;