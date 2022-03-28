import { Giscus } from '@giscus/react';
import { useTheme } from 'next-themes';

export function Comments() {
  const { resolvedTheme } = useTheme();

  return (
    <Giscus
      repo='jessevelden/imjes.se'
      repoId='R_kgDOHBHd3A='
      category='Blog posts'
      categoryId='DIC_kwDOHBHd3M4COTYs'
      mapping='pathname'
      reactionsEnabled='1'
      emitMetadata='0'
      theme={resolvedTheme}
    />
  );
}
