import { Icon } from '@iconify/react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { ReactNode } from 'react';

import clsxm from '@/lib/clsxm';
export type ActivePage = 'home' | 'blog' | undefined;

function HeaderLink({
  href,
  children,
  active,
  className,
  noActive,
  ...props
}: {
  href: string;
  children: ReactNode;
  active?: boolean;
  noActive?: boolean;
  className?: string | boolean;
}) {
  return (
    <Link href={href}>
      <a
        className={clsxm(
          'rounded py-2 px-3 font-medium text-accent no-underline underline-offset-4 dark:text-primary-400' +
            ' animated-underline transition-all duration-200 hover:bg-primary-50 dark:hover:bg-primary-900/50',
          active && !noActive && 'always-nice-underline bg-primary-100/50 font-semibold  dark:bg-primary-900/50',
          className
        )}
        {...props}
      >
        {children}
      </a>
    </Link>
  );
}

export function HeaderNav({ activePage }: { activePage: ActivePage }) {
  const { theme, setTheme } = useTheme();

  return (
    <nav className='top-nav sticky top-0 z-50 z-10 px-4 shadow shadow-primary-100/70 dark:shadow-primary-900/50 sm:px-6 md:px-12 lg:px-8 xl:px-0'>
      <div className='container mx-auto flex w-full max-w-screen-lg items-center justify-between py-1 md:flex-row lg:px-0'>
        <HeaderLink href='/' active={activePage === 'home'} noActive={true} className='-ml-2'>
          Jesse van der Velden
        </HeaderLink>
        <div className='flex items-center space-x-5'>
          <HeaderLink href='/blog' active={activePage === 'blog'}>
            Blog
          </HeaderLink>
          <button
            className='over:bg-primary-50 rounded-lg p-2 text-tertiary transition-all hover:bg-primary-50 hover:text-black focus:outline-none focus:ring-stone-800 focus-visible:ring-2 dark:hover:bg-stone-800/80 dark:hover:text-white dark:focus:ring-white'
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'light' ? (
              <Icon icon='ri:moon-clear-fill' className='h-5 w-5 transition-colors' />
            ) : (
              <Icon icon='jam:sun-f' className='h-5 w-5 transition-colors' />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
