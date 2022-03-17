import clsx from 'clsx';
import { useTheme } from 'next-themes';
import React from 'react';
import GitHubButton from 'react-github-btn';

import { FadeIn } from '@/components/FadeIn';
import UnstyledLink from '@/components/links/UnstyledLink';

export function ProjectCard({
  title,
  description,
  href,
  className,
  github,
}: {
  title: string;
  description: React.ReactElement;
  github?: string;
  href: string;
  className?: string;
}) {
  const { theme } = useTheme();

  return (
    <FadeIn>
      <div
        className={clsx(
          'group rounded-md shadow-sm md:w-full',
          'border dark:border-gray-600',
          'scale-100 hover:scale-[1.02] hover:shadow active:scale-[0.97] motion-safe:transform-gpu',
          'transition duration-100',
          'motion-reduce:hover:scale-100',
          'animate-shadow',
          className
        )}
      >
        <UnstyledLink
          href={href}
          className='flex h-full flex-col items-start rounded-md p-4 focus:outline-none focus-visible:ring focus-visible:ring-primary-300'
        >
          <div className='flex w-full flex-col justify-between sm:flex-row'>
            <span className='font-semibold'>{title}</span>
            {github && (
              <GitHubButton
                href={github}
                data-color-scheme={`no-preference: ${theme}; dark: ${theme}; light: ${theme}`}
                data-show-count='true'
              >
                Star
              </GitHubButton>
            )}
          </div>
          <p className='my-4 flex-1 text-sm text-secondary text-gray-700 group-hover:text-dark dark:group-hover:text-gray-100'>
            {description}
          </p>

          <p className='animated-underline inline-block font-medium'>Learn more →</p>
        </UnstyledLink>
      </div>
    </FadeIn>
  );
}
