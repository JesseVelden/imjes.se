import clsx from 'clsx';

import UnstyledLink from '@/components/links/UnstyledLink';

export function TOCLink({ id, level, minLevel, text }: { id: string; level: number; minLevel: number; text: string }) {
  return (
    <UnstyledLink
      href={`#${id}`}
      id={`link-${id}`}
      className={clsx(
        'relative font-medium text-accent before:text-gray-500' +
          ' hover:text-accentLight' +
          ' focus:outline-none' +
          ' dark:text-slate-300' +
          ' dark:hover:text-gray-700' +
          ' before:dark:text-slate-500 dark:hover:text-gray-100',
        'transition-colors focus-visible:text-gray-700 dark:focus-visible:text-gray-200',
        level === minLevel ? 'heading-top' : 'heading-sub'
      )}
      style={{ marginLeft: (level - minLevel) * 16 }}
    >
      {text}
    </UnstyledLink>
  );
}

export type Headings = Array<{
  slug: string;
  lvl: number;
  content: string;
}>;

export function MobileTableOfContents({ headings, minLevel }: { headings: Headings; minLevel: number }) {
  return (
    <div id='toc-mobile' className='overflow-auto lg:hidden'>
      <h3 className='text-xl text-gray-900 dark:text-gray-100'>Table of Contents</h3>
      <div className='headings flex flex-col space-y-2 text-sm md:text-base'>
        {headings.map(({ slug, lvl, content }) => (
          <TOCLink key={slug} id={slug} level={lvl} minLevel={minLevel} text={content} />
        ))}
      </div>
    </div>
  );
}
