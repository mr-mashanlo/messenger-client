import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

const ChatOptions: FC = () => {
  return (
    <Menu>
      <MenuButton data-active className="px-4 py-2 rounded-md bg-zinc-100">Options</MenuButton>
      <MenuItems data-open transition anchor="bottom end" className="w-52 p-1 mt-1 origin-top-right rounded-md border border-zinc-200 bg-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0">
        <MenuItem>
          <Link to="/settings" className="block w-full px-3 py-2 text-left rounded-md data-[focus]:bg-zinc-100">Settings</Link>
        </MenuItem>
        <div className="my-1 h-px bg-zinc-200" />
        <MenuItem>
          <button className="w-full px-3 py-2 text-left rounded-md data-[focus]:bg-zinc-100">Clear chat</button>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
};

export default ChatOptions;