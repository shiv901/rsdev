import React from 'react';

type props = {
  url: string;
  label: string;
  icon?: JSX.Element;
  children?: JSX.Element;
};
export default function SocialIcon({ url, label, children, icon }: props) {
  return (
    <>
      <a
        href={url}
        aria-label={label}
        target='_blank'
        rel='noopener noreferrer'
        className='text-2xl hover:scale-125 transition-all'
      >
        {icon && React.cloneElement(icon, { className: 'text-green-500' })}
        {children}
      </a>
    </>
  );
}
