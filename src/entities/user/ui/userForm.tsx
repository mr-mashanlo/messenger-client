import { FC } from 'react';
import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react';

const UserForm: FC = () => {
  return (
    <Combobox>
      <ComboboxInput className="block w-full px-3 py-2 rounded-md outline outline-1 outline-zinc-200 bg-transparent placeholder:text-zinc-500 focus:outline-zinc-500" />
      <ComboboxOptions transition anchor="bottom" className="p-1 mt-1 rounded-md bg-white border border-zinc-200 transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0 w-[var(--input-width)] [--anchor-gap:var(--spacing-1)] empty:invisible">
        <ComboboxOption value={1} className="block w-full px-3 py-2 text-left rounded-md data-[focus]:bg-zinc-100">
          person.name
        </ComboboxOption>
        <ComboboxOption value={2} className="block w-full px-3 py-2 text-left rounded-md data-[focus]:bg-zinc-100">
          person.name
        </ComboboxOption>
      </ComboboxOptions>
    </Combobox>
  );
};

export default UserForm;