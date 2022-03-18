import Image from 'next/image';
import * as React from 'react';

import UnderlineLink from '@/components/links/UnderlineLink';

import CofanoImage from '/public/images/Cofano.png';
import SSTImage from '/public/images/SST.png';
import YDImage from '/public/images/YD.png';
const workExperienceListClass = 'mx-4 mt-2 list-outside list-disc space-y-1 marker:text-primary-500';
const employerClass = 'text-gray-700 dark:text-white';

const workExperience = [
  {
    employer: <span className={employerClass}>Yes Development</span>,
    title: 'Owner/ Freelance Full-Stack Developer',
    years: '2015-',
    image: YDImage,
    description: (
      <>
        I work as a freelancer with my own company where I build and manage or contributed to some B2B Web Application
        projects. Some highlights:
        <ul className={workExperienceListClass}>
          <li> Investing calculator for new housing projects in The Netherlands</li>
          <li>Employee evaluation survey tool for a SME consultancy company</li>
          <li>
            Registration/ training class sign up web app for the student CrossFit association alongside my year as a
            volunteer board member.
          </li>
        </ul>
      </>
    ),
  },
  {
    employer: (
      <UnderlineLink href='https://cofano.nl/en' className={employerClass}>
        Cofano Software Solutions
      </UnderlineLink>
    ),
    title: 'Software Engineer',
    years: '2018-21',
    image: CofanoImage,
    description: (
      <>
        Worked part-time besides my study at Cofano, that develops software solutions in the logistics field with
        clients in the Port of Rotterdam, and Amsterdam Schiphol Airport.
        <ul className={workExperienceListClass}>
          <li>Helped to introduce TypeScript and code generation for GraphQL</li>
          <li>
            Created an React Native app that tracks flower shipments, which received a design award from my university
          </li>
          <li>
            Developed new features using tools like Java Spring Boot, PostgreSQL, Hibernate, and React & TypeScript for
            the front-end
          </li>
        </ul>
      </>
    ),
  },
  {
    employer: (
      <UnderlineLink href='https://sst-software.nl/en/' className={employerClass}>
        SST Software
      </UnderlineLink>
    ),
    title: 'Junior Developer',
    years: '2016-18',
    image: SSTImage,
    description: (
      <>
        I contributed to several web applications using PHP & Laravel as a part-time developer besides my study.
        <ul className={workExperienceListClass}>
          <li>Improved internal monitoring and tracking of issues of customers</li>
          <li>Contributed to with several projects of several SMEs</li>
          <li>Designed & maintained several custom WordPress websites</li>
          <li>Helped with improving the deployment process to Apple AppStore</li>
        </ul>
      </>
    ),
  },
];

const blueFilterStyle = {
  filter: '', //'invert(80%) sepia(100%) saturate(1000%) hue-rotate(170deg) brightness(100%) contrast(100%)',
};
export function WorkExperience() {
  return (
    <div className='mt-5 mb-10 rounded-lg border-2 border-dotted border-primary'>
      {workExperience.map((work) => (
        <div
          key={work.title}
          className='group flex flex-col divide-dashed divide-primary-400 divide-opacity-20 border-b-2 border-dotted
          border-primary transition duration-500 ease-in-out first-of-type:rounded-t-lg last-of-type:rounded-b-lg
          last-of-type:border-0 hover:bg-gray-100 dark:hover:bg-slate-900 md:flex-row md:justify-between md:divide-x-2'
        >
          <div className='flex p-3 pb-0 md:w-2/5 md:flex-col md:space-x-2 lg:w-full lg:pr-8'>
            <div className='hidden h-full w-full items-center md:order-2 md:flex'>
              <div
                className='mx-auto w-72 items-center justify-start border-primary lg:w-auto '
                style={blueFilterStyle}
              >
                <Image
                  src={work.image}
                  alt={`${work.employer} logo`}
                  width={450}
                  height={125}
                  quality={100}
                  className=' lg:h-[125px] lg:w-[450px]'
                />
              </div>
            </div>
            <div className='flex w-full items-start justify-between md:space-x-2'>
              <div className='flex w-full flex-col'>
                <div className='flex w-full items-center justify-between'>
                  <h5 className='text-md animated-underline font-semibold text-secondary'>{work.employer}</h5>
                  <span className='font-mono text-sm text-tertiary'>{work.years}</span>
                </div>
                <div className='text-sm text-secondary'>{work.title}</div>
              </div>
            </div>
          </div>
          <div className='w-full max-w-lg py-3 px-4 text-sm text-black dark:text-white lg:pl-8'>{work.description}</div>
        </div>
      ))}
    </div>
  );
}
