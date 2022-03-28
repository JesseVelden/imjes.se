import { Icon } from '@iconify/react';
import * as React from 'react';

import { EmailLinkWrapper } from '@/components/links/EmailLinkWrapper';
import UnstyledLink from '@/components/links/UnstyledLink';

const thisYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className='container mx-auto flex w-full max-w-screen-lg flex-col items-center justify-between gap-2 border-t border-gray-300 px-4 py-8 text-sm text-gray-700 dark:border-gray-700 dark:text-gray-100 sm:flex-row lg:px-0'>
      <div>© {thisYear} • Jesse van der Velden</div>
      <div className='flex gap-4'>
        <EmailLinkWrapper>
          <UnstyledLink href='#' className='flex cursor-pointer items-center gap-1'>
            <Icon icon='line-md:email' className='h-6 w-6' />
          </UnstyledLink>
        </EmailLinkWrapper>
        <UnstyledLink className='flex cursor-pointer items-center gap-1' href='https://www.linkedin.com/in/jessevelden'>
          <Icon icon='la:linkedin' className='h-6 w-6' />
        </UnstyledLink>
        <UnstyledLink className='flex cursor-pointer items-center gap-1' href='https://github.com/JesseVelden'>
          <Icon icon='la:github' className='h-6 w-6' />
        </UnstyledLink>
        <UnstyledLink
          className='flex cursor-pointer items-center gap-1'
          href='https://stackoverflow.com/users/3801276/megacookie'
        >
          <Icon icon='la:stack-overflow' className='h-6 w-6' />
        </UnstyledLink>
      </div>
    </footer>
  );
}
