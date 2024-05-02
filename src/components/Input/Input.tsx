import { ReactNode } from 'react';

type Properties = {
  value?: string;
  onChange?: () => void;
  name?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  placeholder?: string;
};

function Input({
  value,
  onChange,
  name,
  leftIcon,
  rightIcon,
  placeholder,
}: Properties) {
  return (
    <div className="flex rounded-md bg-bg300 px-7 py-4 text-white focus-within:bg-bg400">
      {leftIcon}
      <input
        className="w-full bg-transparent outline-none focus:placeholder-white"
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      />
      {rightIcon}
    </div>
  );
}

export { Input };
