import { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const SettingsLayout: FC = () => {
  return (
    <div>
      <div className="max-w-[70rem] mx-auto">
        <div className="grid grid-cols-[1fr_2fr]">
          <nav>
            <ul>
              <li><Link to="account">Acount</Link></li>
              <li><Link to="apperance">Apperance</Link></li>
            </ul>
          </nav>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SettingsLayout;