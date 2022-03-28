import { Icon } from '@iconify/react';
import * as React from 'react';

const experiences = [
  {
    title: 'Programming',
    exeperiences: [
      { name: 'JavaScript, TypeScript (Node.js)', icon: 'bxl:nodejs' },
      { name: 'Java', icon: 'cib:java' },
      { name: 'Python', icon: 'teenyicons:python-outline' },
      { name: 'PHP', icon: 'fa6-brands:php' },
      { name: 'PL/pgSQL', icon: 'simple-icons:postgresql' },
      { name: 'Objective-C', icon: 'teenyicons:c-outline' },
    ],
  },
  {
    title: 'Back-end Tech',
    exeperiences: [
      { name: 'Spring Boot & Hibernate', icon: 'simple-icons:spring' },
      { name: 'Docker', icon: 'teenyicons:docker-outline' },
      { name: 'Kubernetes', icon: 'carbon:kubernetes' },
      { name: 'Next.js', icon: 'teenyicons:nextjs-outline' },
      { name: 'Laravel', icon: 'cib:laravel' },
      { name: 'GraphQL servers', icon: 'akar-icons:graphql-fill' },
      { name: 'Express.js', icon: 'logos:express' },
      { name: 'WordPress', icon: 'cib:wordpress' },
    ],
  },
  {
    title: 'Front-end Tech',
    exeperiences: [
      { name: 'HTML5 + CSS3 + JS', icon: 'icomoon-free:html-five2' },
      { name: 'React & React Native', icon: 'akar-icons:react-fill' },
      { name: 'GraphQL clients', icon: 'akar-icons:graphql-fill' },
      { name: 'TailwindCSS', icon: 'teenyicons:tailwind-outline' },
    ],
  },
  {
    title: 'Databases',
    exeperiences: [
      { name: 'PostgreSQL', icon: 'simple-icons:postgresql' },
      { name: 'Redis', icon: 'simple-icons:redis' },
      { name: 'MySQL', icon: 'cib:mysql' },
      { name: 'SQLite', icon: 'file-icons:sqlite' },
      { name: 'MongoDB', icon: 'teenyicons:mongodb-outline' },
    ],
  },
  {
    title: 'Data Science',
    exeperiences: [
      { name: 'Python Jupyter lab/ notebooks', icon: 'carbon:logo-jupyter' },
      { name: 'Numpy', icon: 'file-icons:numpy' },
      { name: 'R and Matlab', icon: 'file-icons:matlab' },
    ],
  },
];

export function ProgrammingExperience() {
  return (
    <div className='mt-2 mb-4 grid grid-cols-2 gap-8 text-gray-700 dark:text-zinc-50 sm:grid-cols-3 md:grid-cols-4 md:gap-3 lg:grid-cols-5 lg:gap-8'>
      {experiences.map((experience) => (
        <div key={experience.title} className=''>
          <span className='font-semibold'>{experience.title}</span>
          <ul className='space-y-2 pt-2 text-sm'>
            {experience.exeperiences.map((item) => (
              <li key={item.name} className='flex space-x-1'>
                <Icon icon={item.icon} className='h-5 w-5 flex-shrink-0 text-primary-400' />
                <span className='text-secondary'>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
