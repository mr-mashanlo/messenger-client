import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  id: string
  label?: string
  type: 'text' | 'password'
}

const Input: FC<Props> = ( { id, label, type, ...others } ) => {
  return (
    <div className="relative">
      {label && <label htmlFor={id} className="px-2 text-sm font-medium absolute -top-[0.55rem] left-5 bg-white">{label}</label>}
      <input {...others} type={type} id={id} name={id} className="block w-full p-4 outline outline-2 outline-gray-300 rounded-lg focus:outline-black" />
    </div>
  );
};

export default Input;