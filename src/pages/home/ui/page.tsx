import { FC } from 'react';

import { debounce } from '@/shared/helpers';

export const HomePage: FC = () => {

  const logg = debounce();

  logg( () => console.log( 1 ) );
  logg( () => console.log( 2 ) );
  logg( () => console.log( 3 ) );

  return (
    <div className="min-h-screen px-60 py-10 grid items-center">
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, consequuntur.</p>
    </div>
  );
};

export default HomePage;
