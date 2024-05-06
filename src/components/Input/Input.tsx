import { ReactNode } from 'react';

type Properties = {
  value?: string;
  onChange?: () => void;
  name?: string;
  type?: string;
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
  type = 'text',
}: Properties) {
  return (
    <div className="text-white flex rounded-md bg-bg300 px-7 py-4 focus-within:bg-bg400">
      {leftIcon}
      <input
        className="w-full bg-transparent outline-none focus:placeholder-white"
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
      />
      {rightIcon}
    </div>
  );
}

export { Input };
