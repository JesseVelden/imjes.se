import { Icon } from '@iconify/react';
import { allPosts, Post } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { FadeIn } from '@/components/FadeIn';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

type BlogPageType = {
  postsGroupedByYear: Record<number, Post[]>;
};

export const getStaticProps: GetStaticProps<BlogPageType> = async () => {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });

  const postsGroupedByYear = posts.reduce((acc: Record<number, Post[]>, post) => {
    if (!acc[post.year]) acc[post.year] = [];
    acc[post.year].push(post);
    return acc;
  }, {});
  return { props: { postsGroupedByYear } };
};

export default function Blog({ postsGroupedByYear }: BlogPageType) {
  return (
    <Layout activePage='blog'>
      <Seo title='Blog | imjes.se' />
      <main className='container mx-auto mt-12 max-w-3xl px-4 md:px-0'>
        <div className='mb-2 flex w-full flex-row items-center justify-between gap-3 align-baseline leading-7'>
          <h3 className='inline-block align-baseline font-sans text-3xl font-bold'>Blog</h3>
          <a
            title='Link to RSS feed'
            aria-label='Link to RSS feed'
            className='inline-flex cursor-pointer items-center justify-center gap-2 truncate rounded-md bg-orange-400 py-1 px-3 align-baseline text-xs font-semibold tracking-wide text-stone-800 transition-all hover:scale-[1.02] focus:bg-orange-500'
            href='/rss.xml'
          >
            <Icon icon='bx:rss' className='h-5 w-5' />
            <span className='m-0 box-border whitespace-nowrap border-0 p-0 align-baseline leading-7'>RSS Feed</span>
          </a>
        </div>
        <div className='my-4'>
          {postsGroupedByYear &&
            Object.entries(postsGroupedByYear).map(([year, posts]) => (
              <FadeIn key={year}>
                <PostGroup year={year} posts={posts} />
              </FadeIn>
            ))}
        </div>
      </main>
    </Layout>
  );
}

function PostCard(post: Post) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <a
        title={post.title}
        aria-label={post.title}
        className='group relative flex cursor-pointer flex-col items-stretch gap-3 overflow-hidden rounded bg-transparent
          p-3 pb-3 transition-all duration-300 ease-in-out hover:scale-[1.01] hover:bg-primary-50/70
          hover:shadow-primary-400/50 dark:ring-dark-lighter dark:hover:bg-slate-800/70 xs:flex-row sm:gap-6
          sm:rounded-md'
      >
        <div className='block h-36 w-full xs:h-auto xs:max-w-[96px] sm:max-h-36 sm:min-w-[96px] sm:min-w-[160px] sm:max-w-[20%]'>
          <div className='relative h-full w-full'>
            {post.cover && (
              <Image
                {...post.generatedCover}
                alt={post.title}
                objectFit='cover'
                objectPosition='center'
                layout='fill'
                className='rounded'
              />
            )}
          </div>
        </div>
        <div className='flex max-w-full flex-1 flex-col overflow-hidden px-1 sm:px-0'>
          <h5 className='inline-block font-semibold'>
            <span className='animated-underline text-secondary group-hover:text-primary-700 dark:group-hover:text-inherit'>
              {post.title}
            </span>
          </h5>
          <p className='font-normal text-tertiary transition-colors line-clamp-2 sm:text-sm'>{post.excerpt}</p>
          <div className='text-subtle mt-2 inline-flex cursor-pointer flex-wrap items-center gap-6 text-xs sm:text-smx'>
            <div className='flex items-center gap-1'>
              <Icon icon='heroicons-outline:calendar' className='h-4 w-4' />
              <span>{post.shortHumanMonthAndDay}</span>
            </div>
            <div className='flex items-center gap-1'>
              <Icon icon='heroicons-outline:clock' className='h-4 w-4' />
              <span>{post.readingTime.text}</span>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}

function PostGroup({ year, posts }: { year: string; posts: Post[] }) {
  return (
    <div className='my-5 flex flex-col gap-3 sm:gap-6'>
      <div className='my-2 flex items-end gap-2'>
        <h2 className='text-lg'>{year}</h2>
        <hr className='border-subtle flex-1 border-t ' />
      </div>
      {posts.map((post, i) => (
        <PostCard key={post.slug} {...post} />
      ))}
    </div>
  );
}
