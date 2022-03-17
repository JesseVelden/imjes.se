import clsx from 'clsx';
import { useEffect, useRef } from 'react';

import useScrollSpy from '@/lib/useScrollSpy';

import UnstyledLink from '@/components/links/UnstyledLink';

type TOCLinkProps = {
  id: string;
  level: number;
  minLevel: number;
  text: string;
  activeSection: string | null;
};

export function TOCLink({ id, level, minLevel, text, activeSection }: TOCLinkProps) {
  return (
    <UnstyledLink
      href={`#${id}`}
      id={`link-${id}`}
      className={clsx(
        'font-medium hover:text-gray-700 focus:outline-none dark:hover:text-gray-200',
        'transition-colors focus-visible:text-gray-700 dark:focus-visible:text-gray-200',
        activeSection === id ? 'text-gray-900 dark:text-gray-100' : 'text-gray-400 dark:text-gray-500'
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

type TableOfContentsProps = {
  headings: Headings;
  minLevel: number;
};

export function DesktopTableOfContents({ headings, minLevel }: TableOfContentsProps) {
  const activeSection = useScrollSpy();
  const lastPosition = useRef<number>(0);

  useEffect(() => {
    const container = document.getElementById('headings-container');
    const activeLink = document.getElementById(`link-${activeSection}`);

    if (container && activeLink) {
      // Get container properties
      const cTop = container.scrollTop;
      const cBottom = cTop + container.clientHeight;

      // Get activeLink properties
      const lTop = activeLink.offsetTop - container.offsetTop;
      const lBottom = lTop + activeLink.clientHeight;

      // Check if in view
      const isTotal = lTop >= cTop && lBottom <= cBottom;

      const isScrollingUp = lastPosition.current > window.scrollY;
      lastPosition.current = window.scrollY;

      if (!isTotal) {
        // Scroll by the whole clientHeight
        const offset = 25;
        const top = isScrollingUp ? lTop - container.clientHeight + offset : lTop - offset;

        container.scrollTo({ top, behavior: 'smooth' });
      }
    }
  }, [activeSection]);

  return (
    <div id='toc-container' className='max-h-[calc(100vh-9rem-113px)] overflow-auto pb-4'>
      <h3 className='text-gray-900 dark:text-gray-100 md:text-xl'>Table of Contents</h3>
      <div className='mt-4 flex flex-col space-y-2 text-sm'>
        {headings.map(({ slug, lvl, content }) => (
          <TOCLink key={slug} id={slug} activeSection={activeSection} level={lvl} minLevel={minLevel} text={content} />
        ))}
      </div>
    </div>
  );
}
