import { FC, InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface BaseType extends InputHTMLAttributes<HTMLInputElement> {
  name: string,
  type: 'text' | 'password'
  className?: string
}

interface FramedType extends BaseType {
  display: 'framed',
  label: string,
  varning?: string
}

interface BorderedType extends BaseType {
  display: 'bordered'
}

interface NakedType extends BaseType {
  display: 'naked'
}

type Props = FramedType | BorderedType | NakedType

const Input: FC<Props> = ( props ) => {
  if ( props.display === 'framed' ) {
    const { name, type, label, varning, className, ...others } = props;
    return (
      <div className="relative">
        <label htmlFor={name} className="px-2 text-xs font-medium bg-white absolute -top-[0.55rem] left-3 z-10">{varning ? varning : label}</label>
        <input {...others} type={type} name={name} className={twMerge( 'block w-full px-3 py-2 outline-none border rounded-md bg-transparent placeholder:text-zinc-600 focus:border-zinc-500', varning ? 'border-red-300' : 'border-zinc-800', className )} />
      </div>
    );
  } else if ( props.display === 'bordered' ) {
    const { name, type, className, ...others } = props;
    return (
      <div>
        <input {...others} type={type} name={name} className={twMerge( 'block w-full px-3 py-2 outline-none border border-zinc-800 rounded-md bg-transparent placeholder:text-zinc-600 focus:border-zinc-500', className )} />
      </div>
    );
  } else {
    const { name, type, className, ...others } = props;
    return (
      <div>
        <input {...others} type={type} name={name} className={twMerge( 'block w-full outline-none border-none bg-transparent placeholder:text-zinc-600', className )} />
      </div>
    );
  }
};

export default Input;