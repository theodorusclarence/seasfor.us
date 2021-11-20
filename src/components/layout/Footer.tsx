/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

export default function Footer() {
  return (
    <footer className='bg-white'>
      <div className='py-12  md:flex md:items-center md:justify-between layout'>
        <div className='flex justify-center space-x-6 md:order-2'>
          <UnstyledLink href='/'>
            <span className='sr-only'>Silvery</span>
            <img
              className='w-auto h-12'
              src='/images/teamseas-logo.png'
              alt=''
            />
          </UnstyledLink>
        </div>
        <div className='mt-8 md:mt-0 md:order-1'>
          <p className='text-base text-center text-gray-400'>
            &copy; 2021 seasfor.us
          </p>
        </div>
      </div>
    </footer>
  );
}
