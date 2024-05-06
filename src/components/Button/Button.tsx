import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

enum ButtonVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

const buttonVariantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-btnPrimary hover:bg-btnPrimaryHover active:bg-btnPrimaryActive',
  secondary:
    'bg-btnSecondary hover:bg-btnSecondaryHover active:bg-btnSecondaryActive border border-btnSecondary hover:border-btnSecondaryHover',
};

type Properties = {
  text: string;
  startIcon?: ReactNode;
  variant?: ButtonVariant;
  onClick?: () => void;
  className?: string;
};

const defaultClasses = `flex rounded-md px-7 py-4 text-white 
  transition-colors gap-2 items-center justify-center align-middle`;

function Button({
  text,
  startIcon,
  variant = ButtonVariant.PRIMARY,
  onClick,
  className,
}: Properties) {
  return (
    <button
      className={twMerge(
        defaultClasses,
        buttonVariantClasses[variant],
        className,
      )}
      onClick={onClick}
    >
      {startIcon}
      {text}
    </button>
  );
}

export { Button, ButtonVariant };
