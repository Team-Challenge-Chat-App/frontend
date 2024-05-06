import { ArrowLeftIcon, IncognitoIcon } from '@/common/icons';
import { Button, ButtonVariant, Input } from '@/components';

function LoginForm() {
  return (
    <form className="mx-auto flex min-w-[420px] flex-col gap-4">
      <Input name="email" placeholder="Enter your email" />
      <Input
        name="password"
        placeholder="Enter your password"
        type="password"
      />
      <div className="mt-2 flex justify-between gap-4">
        <Button text="Log in" startIcon={<ArrowLeftIcon />} />
        <Button
          text="Continue incognito"
          variant={ButtonVariant.SECONDARY}
          className="flex-grow"
          startIcon={<IncognitoIcon />}
        />
      </div>
    </form>
  );
}

export { LoginForm };
