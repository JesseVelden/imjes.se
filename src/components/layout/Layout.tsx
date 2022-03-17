import * as React from 'react';

import { Footer } from '@/components/layout/Footer';
import { ActivePage, HeaderNav } from '@/components/layout/HeaderNav';

export default function Layout({ children, activePage }: { children: React.ReactNode; activePage: ActivePage }) {
  return (
    <div className='flex min-h-screen flex-col'>
      <HeaderNav activePage={activePage} />
      <div className='flex-1 pb-12'>{children}</div>
      <Footer />
    </div>
  );
}
