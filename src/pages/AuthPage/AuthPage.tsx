import { Layout } from '@/components';
import LoginForm from '@/pages/AuthPage/components/LoginForm/LoginForm.tsx';

function AuthPage() {
  return (
    <Layout className="h-screen justify-center">
      <div className="flex h-20 w-20 items-center justify-center bg-primary text-2xl">
        💪
      </div>
      <LoginForm />
    </Layout>
  );
}

export { AuthPage };
