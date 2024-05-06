import { Button, Input } from '@/components';

function RegisterForm() {
  return (
    <form className="mx-auto flex min-w-[420px] flex-col gap-4">
      <Input name="name" placeholder="Enter your name" />
      <Input name="email" placeholder="Enter your email" />
      <Input
        name="password"
        placeholder="Enter your password"
        type="password"
      />
      <Button text="Register" className="mt-2" />
    </form>
  );
}

export { RegisterForm };
