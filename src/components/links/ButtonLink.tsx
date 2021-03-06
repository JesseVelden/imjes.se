import * as React from 'react';

import clsxm from '@/lib/clsxm';

import UnstyledLink, { UnstyledLinkProps } from '@/components/links/UnstyledLink';

const variantStyles = {
  primary: [
    'bg-primary-500 text-white',
    'border border-primary-600',
    'hover:bg-primary-600 hover:text-white',
    'active:bg-primary-500',
    'disabled:bg-primary-400 disabled:hover:bg-primary-400',
    'dark:bg-dark dark:text-gray-100 dark:disabled:bg-gray-700',
  ],
  outline: [
    'text-gray-800 dark:text-white',
    'border border-gray-300',
    'hover:scale-105 hover:bg-gray-50 active:bg-gray-100 disabled:bg-gray-100',
    'dark:hover:bg-gray-800 dark:active:bg-gray-900 dark:disabled:bg-gray-900',
  ],
  ghost: ['text-primary-500', 'shadow-none', 'hover:bg-primary-50 active:bg-primary-100 disabled:bg-primary-100'],
  light: [
    'bg-white text-dark ',
    'border border-gray-300',
    'hover:bg-gray-100 hover:text-dark',
    'active:bg-white/80 disabled:bg-gray-200',
  ],
  dark: [
    'bg-gray-900 text-white',
    'border border-gray-600',
    'hover:bg-gray-800 active:bg-gray-700 disabled:bg-gray-700',
  ],
};
export type ButtonVariantType = keyof typeof variantStyles;
type ButtonLinkProps = {
  variantType?: ButtonVariantType;
} & UnstyledLinkProps;

const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ children, className, variantType = 'primary', ...rest }, ref) => {
    return (
      <UnstyledLink
        ref={ref}
        {...rest}
        className={clsxm(
          'inline-flex items-center rounded px-4 py-2 font-semibold',
          'focus:outline-none focus-visible:ring focus-visible:ring-primary-500',
          'shadow-sm',
          'transition-all duration-150',
          'dark:border-gray-600',
          'disabled:cursor-not-allowed',
          variantStyles[variantType],
          className
        )}
      >
        {children}
      </UnstyledLink>
    );
  }
);

export default ButtonLink;
