import React from 'react';

interface ButtonProps {
  variable: string;
  title: string;
  handleClick: any;
}

export default function Button(props: ButtonProps) {
  const btnDefault =
    'm-2.5 flex h-14 w-32 items-center justify-evenly rounded-lg text-white p-3';
  const btnNeutral =
    'border-2 border-white bg-transparent  hover:bg-neutral-50 hover:fill-black hover:text-black active:bg-neutral-200 active:text-black';
  const btnTeal = 'bg-teal-500 hover:bg-teal-400 active:bg-teal-600';
  const btnClassNeutral = 'group btn-neutral';
  const svgClassNeutral =
    'w-3 rounded-full border-2 border-white fill-transparent group-hover:fill-black';
  const svgClassTeal = 'w-3 fill-white';
  const svgPathTeal =
    'M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z';
  const svgPathNeutral = 'M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z';

  return (
    <button
      className={
        btnDefault +
        ' ' +
        (props.variable === 'btnNeutral'
          ? btnNeutral + ' ' + btnClassNeutral
          : btnTeal)
      }
      onClick={props.handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className={
          props.variable === 'btnNeutral' ? svgClassNeutral : svgClassTeal
        }
      >
        <path
          d={props.variable === 'btnNeutral' ? svgPathNeutral : svgPathTeal}
        />
      </svg>
      <span className="text-center">{props.title}</span>
    </button>
  );
}
