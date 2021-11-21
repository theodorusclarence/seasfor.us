/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import { products } from '@/data/products';

import Accent from '@/components/Accent';
import EventCard from '@/components/events/EventCard';
import Layout from '@/components/layout/Layout';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';

//#region  //*=========== DATA ===========
const timeline = [
  {
    id: 1,
    target: 'Kuta Beach',
    href: '/event/1',
    date: 'Sep 20',
    datetime: '2020-09-20',
  },
  {
    id: 2,
    target: 'Kuta Beach',
    href: '/event/1',
    date: 'Sep 20',
    datetime: '2020-09-20',
  },
  {
    id: 3,
    target: 'Kuta Beach',
    href: '/event/1',
    date: 'Sep 20',
    datetime: '2020-09-20',
  },
  {
    id: 4,
    target: 'Kuta Beach',
    href: '/event/1',
    date: 'Sep 20',
    datetime: '2020-09-20',
  },
  {
    id: 5,
    target: 'Kuta Beach',
    href: '/event/1',
    date: 'Sep 20',
    datetime: '2020-09-20',
  },
];
//#endregion  //*======== DATA ===========

export default function MyEventsPage() {
  return (
    <Layout>
      <Seo templateTitle='My Events' />

      <div className='relative min-h-screen bg-white'>
        <main className='layout pt-14 sm:pt-16'>
          {/* Page header */}
          <div className='flex items-center space-x-5'>
            <div className='flex-shrink-0'>
              <div className='relative'>
                <img
                  className='w-16 h-16 rounded-full'
                  src='https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
                  alt=''
                />
                <span
                  className='absolute inset-0 rounded-full shadow-inner'
                  aria-hidden='true'
                />
              </div>
            </div>
            <h1 className='text-2xl font-bold text-gray-900'>Ricardo Cooper</h1>
          </div>

          <div className='grid grid-cols-1 gap-6 mt-8 lg:grid-flow-col-dense lg:grid-cols-3'>
            <div className='lg:col-start-1 lg:col-span-2'>
              {/* Description list*/}
              <section aria-labelledby='applicant-information-title'>
                <div className='py-5 lg:py-0'>
                  <h2
                    id='applicant-information-title'
                    className='text-lg font-bold leading-6 text-gray-900'
                  >
                    Events
                  </h2>
                  <p className='max-w-2xl mt-1 text-sm text-gray-500'>
                    All <Accent>#SeasForUs</Accent> events you&apos;ve been to
                  </p>
                </div>
                <div className='grid grid-cols-1 mt-4 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 '>
                  {products.map((product) => (
                    <EventCard key={product.id} product={product} />
                  ))}
                </div>
              </section>
            </div>

            <section
              aria-labelledby='upcoming-events'
              className='lg:col-start-3 lg:col-span-1'
            >
              <div className='px-4 py-5 bg-white shadow sm:rounded-lg sm:px-6'>
                <h2
                  id='upcoming-events'
                  className='text-lg font-bold text-gray-900'
                >
                  Upcoming Events
                </h2>

                {/* Activity Feed */}
                <div className='flow-root mt-6'>
                  <ul role='list' className='-mb-8'>
                    {timeline.map((item, itemIdx) => (
                      <li key={item.id}>
                        <div className='relative pb-8'>
                          {itemIdx !== timeline.length - 1 && (
                            <span
                              className='absolute top-4 left-1 -ml-px h-full w-0.5 bg-gray-200'
                              aria-hidden='true'
                            />
                          )}
                          <div className='relative flex space-x-3'>
                            <div>
                              <span className='flex items-center justify-center w-2 h-2 rounded-full ring-8 ring-white bg-primary-400' />
                            </div>
                            <div className='flex justify-between flex-1 min-w-0 -mt-1.5 space-x-4'>
                              <div>
                                <p className='text-sm text-gray-500'>
                                  <UnstyledLink
                                    href={item.href}
                                    className='font-medium text-gray-900'
                                  >
                                    {item.target}
                                  </UnstyledLink>
                                </p>
                              </div>
                              <div className='text-sm text-right text-gray-500 whitespace-nowrap'>
                                <time dateTime={item.datetime}>
                                  {item.date}
                                </time>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </Layout>
  );
}
