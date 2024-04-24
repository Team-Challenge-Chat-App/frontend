import React from 'react';

export default function Button() {
  function clickButton(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();
  }
  return (
    <button onClick={clickButton} type="submit" className="btn-teal">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="w-3 fill-white"
      >
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
      </svg>
      <span className="text-center">Button</span>
    </button>
  );
}
