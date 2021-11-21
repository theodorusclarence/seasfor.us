/* eslint-disable @next/next/no-img-element */
import { isFuture } from 'date-fns';
import * as React from 'react';
import useSWR from 'swr';

import { parseMyEventsData } from '@/lib/api';
import { formatMinDateEvents } from '@/lib/date';
import useWithToast from '@/hooks/toast/useWithToast';

import Accent from '@/components/Accent';
import EventCard from '@/components/events/EventCard';
import Layout from '@/components/layout/Layout';
import CustomLink from '@/components/links/CustomLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';

import { MyEventsApi } from '@/types/api';

export default function MyEventsPage() {
  const { data: myProductsData, isLoading } = useWithToast(
    useSWR<MyEventsApi>('/events/mine'),
    {
      loading: 'Getting events data',
      success: 'Events fetched successfully',
    }
  );

  const mappedMyProducts = parseMyEventsData(myProductsData).sort(
    (a, b) => b.date.getTime() - a.date.getTime()
  );

  const upcomingProducts = mappedMyProducts
    .filter((product) => isFuture(product.date))
    .sort((a, b) => a.date.getTime() - b.date.getTime());

  return (
    <Layout>
      <Seo templateTitle='My Events' />

      <div className='relative min-h-screen bg-white'>
        <main className='layout pt-14 sm:pt-16'>
          <div className='grid grid-cols-1 gap-6 lg:grid-flow-col-dense lg:grid-cols-3'>
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
                {isLoading ? (
                  <div className='grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3'>
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className='bg-gray-400 animate-pulse h-[360px] rounded'
                      />
                    ))}
                  </div>
                ) : mappedMyProducts.length > 0 ? (
                  <div className='grid grid-cols-1 mt-4 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 '>
                    {mappedMyProducts.map((product) => (
                      <EventCard key={product.id} product={product} />
                    ))}
                  </div>
                ) : (
                  <h2 className='mt-4'>
                    You haven&apos;t contributed to any events yet.{' '}
                    <CustomLink href='/events'>I want to contribute</CustomLink>
                  </h2>
                )}
              </section>
            </div>

            <section
              aria-labelledby='upcoming-events'
              className='lg:col-start-3 lg:col-span-1'
            >
              <div className='px-4 py-5 mt-16 bg-white shadow sm:rounded-lg sm:px-6'>
                <h2
                  id='upcoming-events'
                  className='text-lg font-bold text-gray-900'
                >
                  Upcoming Events
                </h2>

                {/* Activity Feed */}
                <div className='flow-root mt-6'>
                  <ul role='list' className='-mb-8'>
                    {upcomingProducts.map((item, itemIdx) => (
                      <li key={item.id}>
                        <div className='relative pb-8'>
                          {itemIdx !== upcomingProducts.length - 1 && (
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
                                    {item.name}
                                  </UnstyledLink>
                                </p>
                              </div>
                              <div className='text-sm text-right text-gray-500 whitespace-nowrap'>
                                {formatMinDateEvents(item.date)}
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
