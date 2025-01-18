import { FC } from 'react';
import { Field, Input, Label } from '@headlessui/react';

const UserCard: FC = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-48 h-48 bg-zinc-100 rounded-full"></div>
      <Field className="w-full mt-4 relative">
        <Label className="px-2 text-xs font-medium bg-white absolute -top-[0.55rem] left-3 z-10">Fullname</Label>
        <Input type="text" name="fullname" placeholder="John Doe" className="block w-full px-3 py-2 outline-none border rounded-md bg-transparent placeholder:text-zinc-500 focus:border-zinc-500" required />
      </Field>
      <Field className="w-full mt-4 relative">
        <Label className="px-2 text-xs font-medium bg-white absolute -top-[0.55rem] left-3 z-10">About</Label>
        <Input type="text" name="about" placeholder="Frontend developer" className="block w-full px-3 py-2 outline-none border rounded-md bg-transparent placeholder:text-zinc-500 focus:border-zinc-500" required />
      </Field>
      <Field className="w-full mt-4 relative">
        <Label className="px-2 text-xs font-medium bg-white absolute -top-[0.55rem] left-3 z-10">Email</Label>
        <Input type="email" name="email" placeholder="email@company.com" className="block w-full px-3 py-2 outline-none border rounded-md bg-transparent placeholder:text-zinc-500 focus:border-zinc-500" required />
      </Field>
      <Field className="w-full mt-4 relative">
        <Label className="px-2 text-xs font-medium bg-white absolute -top-[0.55rem] left-3 z-10">Site</Label>
        <Input type="url" name="site" placeholder="https://company.com" className="block w-full px-3 py-2 outline-none border rounded-md bg-transparent placeholder:text-zinc-500 focus:border-zinc-500" required />
      </Field>
    </div>
  );
};

export default UserCard;