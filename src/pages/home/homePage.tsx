import { FC } from 'react';

import { Chat } from '@/widgets/chat/ui';

export const HomePage: FC = () => {
  return (
    <div className="min-h-screen px-60 py-10 grid items-center">
      <Chat />
    </div>
  );
};

export default HomePage;
