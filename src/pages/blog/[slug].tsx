import { Icon } from '@iconify/react';
import { allPosts, Post } from 'contentlayer/generated';
import sampleSize from 'lodash/sampleSize';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { ParsedUrlQuery } from 'querystring';

import ShareTweetButton from '@/components/buttons/ShareTweetButton';
import { FadeIn } from '@/components/FadeIn';
import { ImageLightbox } from '@/components/ImageLightbox';
import { DesktopTableOfContents } from '@/components/layout/DesktopTableOfContents';
import Layout from '@/components/layout/Layout';
import MDXComponents from '@/components/layout/MDXComponents';
import { MobileTableOfContents } from '@/components/layout/MobileTableOfContents';
import { LightboxWrapper } from '@/components/LightboxWrapper';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import { RecommendationBlogCard } from '@/components/RecommendationBlogCard';
import Seo from '@/components/Seo';
import { Tag } from '@/components/Tag';
const COMMIT_HISTORY_LINK = (slug: string) =>
  `https://github.com/JesseVelden/imjes.se/commits/main/data/blog/${slug}.mdx`;
const GITHUB_EDIT_LINK = (slug: string) => `https://github.com/JesseVelden/imjes.se/blob/main/data/blog/${slug}.mdx`;

type BlogPostPageType = {
  post: Post;
  recommendations: Post[];
};

function PhotoCredits({ photoCreditsCode }: { photoCreditsCode: string }) {
  const Component = useMDXComponent(photoCreditsCode);
  return (
    <div className='text-subtle w-full pt-4 text-center text-sm italic'>
      <Component components={{ a: UnderlineLink }} />
    </div>
  );
}

export default function BlogPostPage({ post, recommendations }: BlogPostPageType) {
  const Component = useMDXComponent(post.body.code);

  const postDate = new Date(post.date);
  const modifiedDate = post.lastUpdated ? new Date(post.lastUpdated) : undefined;

  return (
    <Layout activePage='blog'>
      <Seo
        title={post.title + ' | imjes.se'}
        date={postDate.toISOString()}
        modifiedDate={modifiedDate?.toISOString()}
      />

      <main>
        <section className=''>
          <div className='layout max-w-screen-lg'>
            <FadeIn>
              <div className='mt-4 pb-4 dark:border-gray-600 lg:mt-8'>
                <UnderlineLink href='/blog'>← All blog posts</UnderlineLink>

                <h1 className='mt-8 text-3xl font-bold tracking-tight md:text-5xl'>{post.title}</h1>

                <p className='mt-3 font-medium text-tertiary md:text-xl md:font-normal'>
                  Written on {postDate.toLocaleString('en-US', { month: 'long', day: '2-digit', year: 'numeric' })} by
                  Jesse van der Velden.
                </p>
                {modifiedDate && (
                  <div className='mt-2 flex flex-wrap gap-2 text-sm text-gray-700 dark:text-gray-200'>
                    <p>
                      Last updated{' '}
                      {modifiedDate.toLocaleString('en-US', { month: 'long', day: '2-digit', year: 'numeric' })}.
                    </p>
                    <UnstyledLink
                      href={COMMIT_HISTORY_LINK(post.slug)}
                      className={
                        'inline-flex items-center gap-1 rounded-sm font-medium' +
                        'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-primary-300' +
                        'focus:outline-none focus-visible:ring focus-visible:ring-primary-300'
                      }
                    >
                      <Icon icon='mdi:history' className='text-lg' />
                      <span>See changes</span>
                    </UnstyledLink>
                  </div>
                )}
                <div className='justify-star0 mt-6 flex items-center gap-8 truncate text-sm font-medium text-gray-600 dark:text-gray-300'>
                  <div className='flex items-center gap-1'>
                    <Icon icon='heroicons-outline:clock' className='inline-block text-base' />
                    <span>{post.readingTime.text}</span>
                  </div>
                  {post.tags?.length > 1 && (
                    <div className='flex items-center space-x-4 truncate'>
                      <span>Tags:</span>
                      <div className='space-x-2 truncate'>
                        {post.tags!.map((tag, i) => (
                          <Tag key={i} name={tag} />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <hr className='dark:border-gray-600' />
            </FadeIn>

            <LightboxWrapper>
              <FadeIn>
                <div className='mx-auto mt-8 block w-full min-w-[96px] sm:min-w-[160px]'>
                  {post.cover && (
                    <div className='mx-auto sm:w-3/5'>
                      <ImageLightbox href={post.cover}>
                        <Image
                          {...post.generatedCover}
                          alt={post.title}
                          height={post.generatedCover.size.height}
                          width={post.generatedCover.size.width}
                          objectFit='cover'
                          objectPosition='center'
                          layout='responsive'
                          className=' rounded'
                        />
                      </ImageLightbox>
                    </div>
                  )}
                  {post.coverCredits && <PhotoCredits photoCreditsCode={post.coverCredits.code} />}
                </div>
                <section className='lg:grid lg:grid-cols-[auto,250px] lg:gap-8'>
                  <article className='mdx prose mx-auto w-full transition-colors dark:prose-invert'>
                    {post.toc?.headings?.length > 1 && (
                      <MobileTableOfContents headings={post.toc?.headings} minLevel={post.toc.highest} />
                    )}
                    <Component components={{ ...MDXComponents }} />
                  </article>

                  {post.toc?.headings?.length > 1 && (
                    <aside className='hidden py-8 lg:block'>
                      <div className='sticky top-20 ml-8'>
                        <DesktopTableOfContents headings={post.toc.headings} minLevel={post.toc.highest} />
                      </div>
                    </aside>
                  )}
                </section>
              </FadeIn>
            </LightboxWrapper>

            <div className='border-subtle mt-8 border-t'>
              <ShareTweetButton className='mt-8' url={`https://imjes.se/blog/${post.slug}`} title={post.title} />
            </div>

            {recommendations.length > 0 && (
              <div className='mt-8'>
                <h2>
                  <span>Other posts that you might like</span>
                </h2>
                <ul className='mt-4 grid gap-6 sm:grid-cols-2 xl:grid-cols-3'>
                  {recommendations.map((post, i) => (
                    <RecommendationBlogCard key={post.slug} post={post} className={i === 2 && 'hidden xl:block'} />
                  ))}
                </ul>
              </div>
            )}

            {/*<SubscribeCard className='mt-12' title='Enjoying this post?' />*/}

            <div className='mt-8 flex flex-col items-start gap-4 sm:flex-row-reverse sm:justify-between'>
              <UnderlineLink href={GITHUB_EDIT_LINK(post.slug)}>Edit this post on GitHub</UnderlineLink>
              <UnderlineLink href='/blog'>← All blog posts</UnderlineLink>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
export const getStaticPaths: GetStaticPaths = async () => ({
  paths: allPosts.map((post) => ({ params: { slug: post.slug } })),
  fallback: false,
});

interface Params extends ParsedUrlQuery {
  slug: string;
}
export const getStaticProps: GetStaticProps<BlogPostPageType> = async (context) => {
  const { slug } = context.params as Params;

  // A loop is used, because we want a more efficient implementation than iterating it multiple times for the recommended posts.
  let post: Post | undefined;
  const otherPosts: Post[] = [];
  const recommendations: Post[] = [];
  for (const postI of allPosts) {
    if (postI.slug === slug) {
      post = postI;
      continue;
    }

    if (
      post?.tags &&
      postI.tags &&
      recommendations.length < 3 &&
      postI.tags.some((otherPostTag) => post!.tags!.includes(otherPostTag))
    ) {
      recommendations.push(postI);
    } else {
      otherPosts.push(postI);
    }
  }

  if (!post) {
    return { notFound: true };
  }

  if (recommendations.length < 3) {
    const randomOtherPosts = sampleSize(otherPosts, 3 - recommendations.length);
    recommendations.push(...randomOtherPosts);
  }

  return { props: { post, recommendations } };
};
