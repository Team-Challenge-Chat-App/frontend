import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

enum ButtonVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

const buttonVariantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-btnPrimary hover:bg-btnPrimaryHover active:bg-btnPrimaryActive',
  secondary:
    'bg-btnSecondary hover:bg-btnSecondaryHover active:bg-btnSecondaryActive',
};

type Properties = {
  text: string;
  startIcon?: ReactNode;
  variant: ButtonVariant;
  onClick: () => void;
};

const defaultClasses =
  'rounded-md px-7 py-4 text-white w-full transition-colors font-semibold';

export default function Button({
  text,
  startIcon,
  variant,
  onClick,
}: Properties) {
  return (
    <button
      className={twMerge(defaultClasses, buttonVariantClasses[variant])}
      onClick={onClick}
    >
      {startIcon}
      {text}
    </button>
  );
}
