import Link, { LinkProps } from 'next/link';
import * as React from 'react';

import clsxm from '@/lib/clsxm';

export type UnstyledLinkProps = {
  href: string;
  children: React.ReactNode;
  openNewTab?: boolean;
  className?: string;
  nextLinkProps?: Omit<LinkProps, 'href'>;
} & React.ComponentPropsWithRef<'a'>;

const UnstyledLink = React.forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
  ({ children, href, openNewTab, className, nextLinkProps, ...rest }, ref) => {
    const isSlug = href.startsWith('#');
    const isExternal = !href.startsWith('/');
    const isNewTab = openNewTab !== undefined ? openNewTab : href && isExternal && !isSlug;

    if (!isNewTab && !isSlug) {
      return (
        <Link href={href} {...nextLinkProps}>
          <a ref={ref} {...rest} className={className}>
            {children}
          </a>
        </Link>
      );
    }

    return (
      <a
        ref={ref}
        {...(isNewTab && {
          target: '_blank',
          rel: 'noopener noreferrer',
        })}
        href={href}
        className={clsxm(isNewTab && 'cursor-newtab', className)}
        {...rest}
      >
        {children}
      </a>
    );
  }
);

export default UnstyledLink;
