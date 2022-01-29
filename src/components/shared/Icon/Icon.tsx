import { FC } from 'react';

import { IconType } from '../../../utils/types/icon.types';

interface IconProps {
  variant: IconType
}

export const Icon: FC<IconProps> = ({ variant }) => (
  <>
    {variant === 'system' && (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17 9 20 8 21h8l-1-1-.75-3M5 17H19a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5A2 2 0 0 0 3 5V15A2 2 0 0 0 5 17Z" />
      </svg>
    )}
    {variant === 'sun' && (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )}
    {variant === 'moon' && (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    )}
    {variant === 'bookmark' && (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
      </svg>
    )}
    {variant === 'font-size' && (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <g>
          <path d="M10.6,16H3.93L2.59,20.27H.5L6,3.44H8.69l5.47,16.83H11.94ZM4.48,14.22h5.57l-2.77-9Z" />
          <path d="M22.68,18.15a1.54,1.54,0,0,0,.2.88,1.11,1.11,0,0,0,.62.4l-.39,1.13A2.61,2.61,0,0,1,22,20.14a1.85,1.85,0,0,1-.71-1,3.48,3.48,0,0,1-1.35,1.05,4.4,4.4,0,0,1-1.79.36,3.27,3.27,0,0,1-2.37-.85,3,3,0,0,1-.86-2.25,2.7,2.7,0,0,1,1.21-2.38,6.14,6.14,0,0,1,3.49-.83h1.47v-.83a1.76,1.76,0,0,0-.63-1.54,3,3,0,0,0-1.76-.45,6.71,6.71,0,0,0-1.16.12,9.8,9.8,0,0,0-1.44.39l-.42-1.21a9.16,9.16,0,0,1,1.72-.48,8.58,8.58,0,0,1,1.55-.14,4,4,0,0,1,2.81.87,3.05,3.05,0,0,1,.94,2.36Zm-4.14,1.19A2.88,2.88,0,0,0,20,19a3.33,3.33,0,0,0,1.11-1V15.34H19.63a3.68,3.68,0,0,0-2.34.57,1.9,1.9,0,0,0-.68,1.53A1.69,1.69,0,0,0,18.54,19.34Z" />
        </g>
      </svg>
    )}
  </>
);
