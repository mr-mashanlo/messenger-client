import { FC, TextareaHTMLAttributes, useEffect, useRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface BaseType extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string,
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

const Textarea: FC<Props> = ( props ) => {
  const textareaRef = useRef<HTMLTextAreaElement>( null );

  const handleInput = () => {
    const textarea = textareaRef.current;
    if ( textarea ) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  useEffect( () => { handleInput(); }, [] );

  if ( props.display === 'framed' ) {
    const { name, label, varning, className, ...others } = props;
    return (
      <div className="relative">
        <label htmlFor={name} className="px-2 text-xs font-medium bg-[#191919] absolute -top-[0.55rem] left-3 z-10">{varning ? varning : label}</label>
        <textarea {...others} ref={textareaRef} onInput={() => handleInput()} name={name} className={twMerge( 'block w-full px-3 py-2 outline-none border rounded-md bg-transparent resize-y overflow-hidden placeholder:text-zinc-600 focus:border-zinc-500', varning ? 'border-red-300' : 'border-zinc-800', className )} />
      </div>
    );
  } else if ( props.display === 'bordered' ) {
    const { name, className, ...others } = props;
    return <textarea {...others} ref={textareaRef} onInput={() => handleInput()} name={name} className={twMerge( 'block w-full px-3 py-2 outline-none border border-zinc-800 rounded-md bg-transparent resize-y overflow-hidden placeholder:text-zinc-600 focus:border-zinc-500', className )} />;
  } else {
    const { name, className, ...others } = props;
    return <textarea {...others} ref={textareaRef} onInput={() => handleInput()} name={name} className={twMerge( 'block w-full outline-none border-none bg-transparent resize-y overflow-hidden placeholder:text-zinc-600 appearance-none', className )} />;
  }
};

export default Textarea;