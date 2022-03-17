import { Icon } from '@iconify/react';
import clsx from 'clsx';

import ButtonLink from '@/components/links/ButtonLink';

type ShareTweetButtonProps = {
  url: string;
  title: string;
  className?: string;
};

export default function ShareTweetButton({ url, title, className, ...rest }: ShareTweetButtonProps) {
  const text = `I just read an article about ${title} by @JesseVelden.`;
  const intentUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(
    text
  )}%0A%0A`;

  return (
    <ButtonLink {...rest} href={intentUrl} className={clsx('items-center gap-2', className)} variant='outline'>
      <Icon icon='simple-icons:twitter' className='text-[1.1em] text-[#1da1f2]' />
      <span className='text-sm !text-white'>Tweet this article</span>
    </ButtonLink>
  );
}
