import { DetailedHTMLProps, FC, TextareaHTMLAttributes } from 'react';

interface Props extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  id: string
  label?: string
}

const Textarea: FC<Props> = ( { id, label, ...others } ) => {
  return (
    <div className="relative">
      {label && <label htmlFor={id} className="px-2 text-sm font-medium absolute -top-[0.55rem] left-5 bg-white">{label}</label>}
      <textarea {...others} id={id} name={id} className="block w-full p-4 outline outline-2 outline-gray-300 rounded-lg focus:outline-black" />
    </div>
  );
};

export default Textarea;