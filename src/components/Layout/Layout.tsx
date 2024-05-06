import React from 'react';

type Properties = {
  className?: string;
  children: React.ReactNode;
};

function Layout({ className, children }: Properties) {
  return (
    <div className={`flex w-full flex-col items-center ${className}`}>
      {children}
    </div>
  );
}

export { Layout };
