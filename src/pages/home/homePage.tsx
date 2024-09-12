import { FC } from 'react';
import { useLoaderData } from 'react-router-dom';
import { IUser } from '@/entities/user';
import { MessageBlock } from '@/features/message/ui';
import { UserList } from '@/features/user/ui';

const HomePage: FC = () => {
  const loaderData = useLoaderData() as { users?: Array<IUser>, errors?: TypeError };
  const users = loaderData.users ? loaderData.users : [];

  return (
    <>
      <section className="min-h-screen max-h-screen py-4 grid bg-gray-100">
        <div className="container-block grid">
          <div className="grid gap-4 grid-cols-[1fr_2fr_1fr]">
            <div className="bg-white rounded-lg"><UserList users={users} /></div>
            <div className="bg-white rounded-lg flex flex-col overflow-hidden"><MessageBlock /></div>
            <div className="bg-white rounded-lg"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;