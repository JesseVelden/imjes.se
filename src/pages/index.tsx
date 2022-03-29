import { Icon } from '@iconify/react';
import clsx from 'clsx';
import { allPosts, Post } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import { DateTime } from 'luxon';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import * as React from 'react';

import { FadeIn } from '@/components/FadeIn';
import { ImjesseMorph } from '@/components/imjesseMorph/imjesseMorph';
import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import { EmailLinkWrapper } from '@/components/links/EmailLinkWrapper';
import UnderlineLink from '@/components/links/UnderlineLink';
import { ProgrammingExperience } from '@/components/ProgrammingExperience';
import { ProjectCard } from '@/components/ProjectCard';
import { RecommendationBlogCard } from '@/components/RecommendationBlogCard';
import Seo from '@/components/Seo';
import { WorkExperience } from '@/components/WorkExperience/WorkExperience';

import meImage from '/public/images/me.jpg';
const myAge = Math.floor(DateTime.fromFormat('10-08-1997', 'dd-MM-yyyy').diffNow('years').years * -1);

export default function HomePage({ lastThreeBlogPosts }: HomePageProps) {
  return (
    <Layout activePage='home'>
      <Seo title='imjes.se | Home' ogTitle='Home' />

      <main className='px-4 sm:px-6 md:px-12 lg:px-8 xl:px-0'>
        <section>
          <div className='container mx-auto max-w-screen-lg'>
            <FadeIn>
              <div className='flex w-full flex-col gap-8 py-4 pt-4 sm:flex-row sm:justify-between  lg:gap-24 lg:px-0 lg:pt-24'>
                <div>
                  <ImjesseMorph />
                  <div className='mt-6 max-w-prose space-y-4'>
                    <p className=''>I'm Jesse van der Velden, a {myAge} year old developer from The Netherlands 🇳🇱.</p>
                    <p className=''>
                      As a Full Stack Developer, my passion is to not only create excellent technical solutions, but
                      also to thoroughly understand the problem and create solutions that best serve the end-users.
                      Because in the end we create software for people, not for computers.
                    </p>
                    <p>
                      When I'm not coding I'm probably out with friends, doing CrossFit or out for a walk while
                      wandering in my own thoughts, podcasts or audiobooks.
                    </p>
                  </div>
                </div>
                <div className='w-full sm:w-auto'>
                  <div className='mx-auto max-h-[250px] w-[250px] sm:float-right'>
                    {/*<div className='absolute z-20 h-full w-full rounded' />*/}
                    <div className='fix-next-image shadow-2xl shadow-primary-500/40 dark:first:shadow-primary-500/30'>
                      <Image
                        src={meImage}
                        width={250}
                        height={250}
                        alt='Me'
                        priority={true}
                        className='z-10 h-full w-full rounded object-cover shadow-inner shadow-blue-500/40 hover:shadow-indigo-500/40'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <ul className='flex flex-col gap-2 pt-4 sm:flex-row sm:items-center'>
                <li className='text-sm text-secondary'>Say hi to me on:</li>
                <div className='grid grid-cols-3 justify-between gap-4 text-sm xs:flex xs:justify-between xs:gap-2 sm:justify-start '>
                  <li>
                    <EmailLinkWrapper>
                      <UnderlineLink className='flex items-center gap-1' href='#'>
                        <Icon icon='heroicons-outline:mail' className='h-5 w-5 flex-shrink-0' />
                        Email
                      </UnderlineLink>
                    </EmailLinkWrapper>
                  </li>
                  <li>
                    <UnderlineLink className='flex items-center gap-1' href='https://www.linkedin.com/in/jessevelden'>
                      <Icon icon='la:linkedin' className='h-5 w-5 flex-shrink-0' />
                      LinkedIn
                    </UnderlineLink>
                  </li>
                  <li>
                    <UnderlineLink className='flex items-center gap-1' href='https://github.com/JesseVelden'>
                      <Icon icon='la:github' className='h-5 w-5 flex-shrink-0' />
                      Github
                    </UnderlineLink>
                  </li>
                  <li className='col-span-2 xs:col-span-1'>
                    <div className='max-w-max'>
                      <UnderlineLink
                        className='flex items-center'
                        href='https://stackoverflow.com/users/3801276/megacookie'
                      >
                        <Icon icon='la:stack-overflow' className='h-5 w-5 flex-shrink-0' />
                        Stack Overflow
                      </UnderlineLink>
                    </div>
                  </li>
                  <li>{/*<UnderlineLink href='https://twitter.com/tylerbenning_' title='Twitter' />*/}</li>
                </div>
              </ul>
            </FadeIn>

            <FadeIn>
              <div className='mt-4 py-4'>
                <div className='flex justify-between'>
                  <h3 className='bg-gradient-aqua bg-clip-text font-semibold text-primary-600 dark:text-transparent'>
                    <span>Latest blog posts</span>
                  </h3>
                  <ArrowLink href='/blog' className='text-accent'>
                    See all blog posts
                  </ArrowLink>
                </div>
                <div
                  className={clsx(
                    'mt-4 grid gap-4 py-8  sm:grid-cols-2 md:grid-cols-3',
                    lastThreeBlogPosts?.length >= 2 && 'xs:grid-cols-2'
                  )}
                >
                  {lastThreeBlogPosts?.map((post, i) => (
                    <RecommendationBlogCard
                      key={post.slug}
                      post={post}
                      className={i === 2 && 'hidden md:block'}
                      biggerExcerpt={true}
                    />
                  ))}
                </div>
              </div>
            </FadeIn>

            <div className='mt-8 space-y-4'>
              <FadeIn>
                <div className='flex'>
                  <h3 className='bg-gradient-aqua bg-clip-text font-semibold text-primary-600 dark:text-transparent'>
                    <span>About me - Experience</span>
                  </h3>
                </div>
                <div className='max-w-prose space-y-4 pt-4'>
                  <p className=''>
                    As I began working besides my study (BSc. technical computer science at the{' '}
                    <UnderlineLink href='https://utwente.nl/en'>University of Twente</UnderlineLink>
                    ), over the years I have learned a lot about ins and outs of Web Applications from programming and
                    architecture to design & infrastructure.
                  </p>
                  <p>
                    <span className='text-sm text-secondary'>See also more details on </span>
                    <UnderlineLink href='https://www.linkedin.com/in/jessevelden' className='ml-1'>
                      my LinkedIn
                    </UnderlineLink>
                  </p>
                </div>
              </FadeIn>

              <FadeIn>
                <WorkExperience />
              </FadeIn>
              <FadeIn>
                <div className='pt-4'>
                  Along the way I have gained extensive experience in the following technologies: <br />
                  <div className='mt-8'>
                    <ProgrammingExperience />
                  </div>
                </div>
              </FadeIn>
              <div className='pt-8'>
                <FadeIn>
                  <div className='flex'>
                    <h3 className='bg-gradient-aqua bg-clip-text font-semibold text-primary-600 dark:text-transparent'>
                      Open-Source pojects & contributions
                    </h3>
                  </div>
                  <div className='max-w-prose space-y-4 pt-4'>
                    <p>
                      I've first started with open-source during my high-school years where I developed an easy PHP API
                      for better web app to access online education materials.
                    </p>

                    <p>
                      Since then, I have benefited a great deal from the open-source community, so I like to give back
                      as well when possible. I do that by developing things that I find useful, and releasing it to the
                      rest of the world, where it will hopefully also help other people.
                    </p>

                    <p>Here I highlight some of my own (🙌) and my contributions (🙏) to other open-source projects:</p>
                    <p>
                      <span className='text-sm text-secondary'>You can find all of my open-source work on </span>
                      <UnderlineLink href='https://github.com/JesseVelden' className='ml-1'>
                        my Github
                      </UnderlineLink>
                    </p>
                  </div>
                </FadeIn>
                <div className='mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8'>
                  <ProjectCard
                    title='📱 SwipyFolders 🙌'
                    description={
                      <>
                        My own project. It's an (old) iOS 8 - 10 Jailbreak tweak with more than 25 000 downloads that I
                        made as I was tired of the default iOS' folder actions. Made in Objective-C (with Logos JB hook)
                        and learned a lot about the iOS ecosystem and reverse-engineering.
                      </>
                    }
                    href='https://github.com/JesseVelden/SwipyFolders'
                    github='https://github.com/JesseVelden/SwipyFolders'
                  />
                  <ProjectCard
                    title='🐘 PgTyped 🙏'
                    description={
                      <>
                        PgTyped is cool library to use raw SQL in TypeScript with type-safety for PostgreSQL. <br /> I
                        contributed by adding Support SCRAM-SHA-256 authentication 🔑, fixed a bug 🐞, and I am in the
                        process to add nullability overrides.
                      </>
                    }
                    href='https://github.com/adelsz/pgtyped'
                    github='https://github.com/adelsz/pgtyped'
                  />
                  <ProjectCard
                    title='📱 deviceconsole 🙏'
                    description={
                      <>
                        As I needed a way to see what was going on on my iPhone for my Jailbreak tweak, I improved a
                        command line tool for log messages from iOS devices: added extra filters, simulator support and
                        support for colored log messages 🌈. Made in C.
                      </>
                    }
                    href='https://github.com/JesseVelden/deviceconsole'
                    github='https://github.com/JesseVelden/deviceconsole'
                  />
                  <ProjectCard
                    title='🐘 Postgraphile 🙏'
                    description={
                      <>
                        Postgraphile is a Node.js Server library to quickly add a GraphQL API server using PostgreSQL as
                        its schema. I contributed to this project by adding to Windows support to the Next.js -
                        Postgraphile starter.
                      </>
                    }
                    href='https://github.com/graphile/starter'
                    github='https://github.com/graphile/starter'
                  />
                  <ProjectCard
                    title='💸 ABN-Telegram 🙌'
                    description={
                      <>
                        My own Python project. It's a Telegram bot that I made to help me with my financial affairs. As
                        soon I make a payment, I get a message on Telegram to categorize it, and it puts it in my Google
                        Sheet for budgeting.
                      </>
                    }
                    href='https://github.com/JesseVelden/abn-telegram'
                    github='https://github.com/JesseVelden/abn-telegram'
                  />
                  <ProjectCard
                    title='Hackintosh projects 🙌'
                    description={
                      <>
                        As a poor High-School student I wanted to tinker around iOS, but couldn't afford a Macbook.
                        Therefore, I wrote guides and made an installer for a Hackintosh installation on my old laptop.
                        Fortunately, I have a Macbook now, so I can focus my time on other cool projects!
                      </>
                    }
                    href='https://github.com/JesseVelden/Lenovo-Y580-OSX-Installer-Clover'
                    github='https://github.com/JesseVelden/Lenovo-Y580-OSX-Installer-Clover'
                  />
                </div>
                <p className='mt-8'>
                  Even this website is{' '}
                  <UnderlineLink href='https://github.com/JesseVelden/imjes.se' className='ml-1'>
                    open-source
                  </UnderlineLink>
                  !
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
interface HomePageProps {
  lastThreeBlogPosts: Post[];
}
export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const lastThreeBlogPosts = allPosts
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    })
    .slice(0, 3);

  return { props: { lastThreeBlogPosts } };
};
