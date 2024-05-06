import { NavLink, useLocation } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import { AppRoutes } from '@/common/enums';

function AuthSwitch() {
  const location = useLocation();

  const isLogin = location.pathname === AppRoutes.LOGIN;

  return (
    <div className="relative flex w-[250px] gap-10 rounded-full border border-btnSecondary bg-bg200 px-6 py-2">
      <NavLink className="relative z-10 w-1/2 text-center" to={AppRoutes.LOGIN}>
        Log in
      </NavLink>
      <NavLink
        className="relative z-10 w-1/2 text-center"
        to={AppRoutes.REGISTER}
      >
        Register
      </NavLink>

      <span
        className={twMerge(
          'absolute left-0 top-0 h-full w-1/2 rounded-full bg-btnPrimary transition-transform',
          isLogin ? 'translate-x-0 transform' : 'translate-x-full',
        )}
      ></span>
    </div>
  );
}

export { AuthSwitch };
