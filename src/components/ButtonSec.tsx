import React from 'react';

export default function ButtonSec() {
  const buttonClass = 'group btn-neutral';
  const svgClass =
    'w-3 rounded-full border-2 border-white fill-transparent group-hover:fill-black';

  function clickButton(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();
  }
  return (
    <button onClick={clickButton} type="submit" className={buttonClass}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className={svgClass}
      >
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
      </svg>
      <span className="text-center">Button</span>
    </button>
  );
}
