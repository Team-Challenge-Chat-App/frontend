import { useLocation } from 'react-router-dom';

import { AppRoutes } from '@/common/enums';
import { Layout } from '@/components';

import { AuthSwitch, LoginForm, RegisterForm } from './components';

function AuthPage() {
  const location = useLocation();

  const isLogin = location.pathname === AppRoutes.LOGIN;

  return (
    <Layout className="h-screen justify-center gap-8">
      <AuthSwitch />
      <div className="flex h-[260px] w-[260px] items-center justify-center bg-bg200 text-2xl">
        Logo
      </div>
      <p>Goida</p>
      {isLogin ? <LoginForm /> : <RegisterForm />}
    </Layout>
  );
}

export { AuthPage };
