import { Icon } from '@iconify/react';
import clsx from 'clsx';
import { Post } from 'contentlayer/generated';
import Image from 'next/image';
import Link from 'next/link';

import clsxm from '@/lib/clsxm';

import { Tag } from '@/components/Tag';

export function RecommendationBlogCard({
  post,
  className,
  biggerExcerpt,
}: {
  post: Post;
  className?: string | false;
  biggerExcerpt?: boolean;
}) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <a
        className={clsxm(
          'transform overflow-hidden rounded-lg border border-gray-300 bg-transparent' +
            ' group transition duration-300 hover:scale-[1.02] hover:bg-primary-50/50 dark:border-gray-600 dark:hover:bg-slate-800/70',
          className
        )}
      >
        {post.cover && (
          <Image
            {...post.generatedCover}
            width={1200}
            height={480}
            className='pointer-events-none overflow-hidden rounded-t-md'
            alt='Photo taken from unsplash'
            objectFit='cover'
          />
        )}
        <div className='p-2 md:px-4 md:pt-2'>
          <span className='flex w-full flex-col justify-between gap-2 text-secondary xs:flex-row xs:items-center'>
            <div className='space-x-2 line-clamp-1 md:w-3/5'>
              {post.tags?.length > 1 ? (
                post.tags!.map((tag, i) => <Tag key={i} name={tag} />)
              ) : (
                <div className='flex items-center gap-1 text-sm'>
                  <Icon icon='heroicons-outline:clock' className='inline-block' />
                  <span>{post.readingTime.text}</span>
                </div>
              )}
            </div>
            <time dateTime={post.longHumanDate} className='text-sm font-medium'>
              {post.longHumanDate}
            </time>
          </span>
          <h4 className='mt-2 mb-2 truncate font-bold'>
            <span className='animated-underline group-hover:text-primary-700 dark:group-hover:text-inherit'>
              {post.title}
            </span>
          </h4>
          <p
            className={clsx(
              'text-sm text-gray-600  dark:text-gray-300',
              biggerExcerpt ? 'h-16 line-clamp-3 md:h-20 md:line-clamp-4' : 'h-16 line-clamp-3'
            )}
          >
            {post.excerpt}
          </p>
        </div>
      </a>
    </Link>
  );
}
