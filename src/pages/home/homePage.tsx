import { FC } from 'react';
import { ChatBlock } from '@/features/chat/ui';

const HomePage: FC = () => {
  return (
    <>
      <section className="min-h-screen py-5 sm:py-20">
        <div className="container-block">
          <ChatBlock />
        </div>
      </section>
    </>
  );
};

export default HomePage;