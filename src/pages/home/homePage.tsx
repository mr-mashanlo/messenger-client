import { FC } from 'react';
import { useLoaderData } from 'react-router-dom';
import { IUser } from '@/entities/user/types';
import { UserList } from '@/features/user/ui';

const HomePage: FC = () => {
  const loaderData = useLoaderData() as { users?: Array<IUser>, errors?: TypeError };

  return (
    <>
      <section className="min-h-screen py-4 grid bg-gray-100">
        <div className="container-block grid">
          <div className="grid gap-4 grid-cols-[1fr_2fr_1fr]">
            <div className="bg-white rounded-lg">
              <UserList users={loaderData.users || []} />
            </div>
            <div className="bg-white rounded-lg flex flex-col">
              <div className="h-full"></div>
              <div className="p-4 border-t-2 border-gray-100">
                <form>
                  <input type="text" className="w-full p-3 bg-gray-100 rounded-lg" />
                </form>
              </div>
            </div>
            <div className="bg-white rounded-lg"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;