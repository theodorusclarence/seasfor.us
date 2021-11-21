/* eslint-disable @next/next/no-img-element */
import { Dialog, Disclosure, Transition } from '@headlessui/react';
import clsx from 'clsx';
import isFuture from 'date-fns/isFuture';
import * as React from 'react';
import { HiChevronDown, HiOutlineX, HiPlusSm } from 'react-icons/hi';
import useSWR from 'swr';

import useWithToast from '@/hooks/toast/useWithToast';

import { Product } from '@/data/products';

import Accent from '@/components/Accent';
import EventCard from '@/components/events/EventCard';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { EventsApi } from '@/types/api';

//#region  //*=========== Data ===========
const filters = [
  {
    id: 'status',
    name: 'Status',
    options: [
      { value: 'upcoming', label: 'Upcoming' },
      { value: 'ended', label: 'Ended' },
    ],
  },
];
const statusFilter = [
  { value: 'upcoming', label: 'Upcoming' },
  { value: 'ended', label: 'Ended' },
];
//#endregion  //*======== Data ===========

export default function EventsPage() {
  const { data: productsData, isLoading } = useWithToast(
    useSWR<EventsApi>('/events')
  );
  const mappedProducts: Array<Product> =
    productsData?.data.map((d) => ({
      id: d.id,
      name: d.name,
      description: d.description,
      href: `/event/${d.id}`,
      participants: d.participant + '',
      date: new Date(d.date),
      city: d.city.name,
      imageSrc:
        'https://res.cloudinary.com/theodorusclarence/image/upload/f_auto,c_fill,ar_5:3,w_1200/v1637384615/seasforus/max-PqoCWV93yps-unsplash_asxwzj.jpg',
      imageAlt: `Picture of ${d.name}`,
    })) ?? [];

  //#region  //*=========== Filter ===========
  const [mobileFiltersOpen, setMobileFiltersOpen] = React.useState(false);
  const [status, setStatus] = React.useState({ upcoming: false, ended: false });
  const [selectedCity, setSelectedCity] = React.useState<string>('all');

  const statusFilteredProducts = mappedProducts.filter((p) => {
    /** If only upcoming checked, then take item if isFuture */
    if (status.upcoming && !status.ended) {
      return isFuture(p.date);
      /** If only ended checked, then take item if not isFuture */
    } else if (status.ended && !status.upcoming) {
      return !isFuture(p.date);
      /** Else, take all products */
    } else {
      return true;
    }
  });

  const cities = mappedProducts.map((p) => p.city);
  const filteredProducts = statusFilteredProducts.filter((p) => {
    if (selectedCity === 'all') return true;

    return p.city === selectedCity;
  });
  //#endregion  //*======== Filter ===========

  return (
    <Layout>
      <Seo templateTitle='Browse Events' />

      {/* Mobile filter dialog */}
      <Transition.Root show={mobileFiltersOpen} as={React.Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 z-40 flex lg:hidden'
          onClose={setMobileFiltersOpen}
        >
          <Transition.Child
            as={React.Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>
          <Transition.Child
            as={React.Fragment}
            enter='transition ease-in-out duration-300 transform'
            enterFrom='translate-x-full'
            enterTo='translate-x-0'
            leave='transition ease-in-out duration-300 transform'
            leaveFrom='translate-x-0'
            leaveTo='translate-x-full'
          >
            <div className='relative flex flex-col w-full h-full max-w-xs py-4 pb-6 ml-auto overflow-y-auto bg-white shadow-xl'>
              <div className='flex items-center justify-between px-4'>
                <h2 className='text-lg font-medium text-gray-900'>Filters</h2>
                <button
                  type='button'
                  className='flex items-center justify-center w-10 h-10 p-2 -mr-2 text-gray-400 hover:text-gray-500'
                  onClick={() => setMobileFiltersOpen(false)}
                >
                  <span className='sr-only'>Close menu</span>
                  <HiOutlineX className='w-6 h-6' aria-hidden='true' />
                </button>
              </div>
              {/* Filters */}
              <form className='mt-4'>
                {filters.map((section) => (
                  <Disclosure
                    as='div'
                    key={section.name}
                    className='pt-4 pb-4 border-t border-gray-200'
                  >
                    {({ open }) => (
                      <fieldset>
                        <legend className='w-full px-2'>
                          <Disclosure.Button className='flex items-center justify-between w-full p-2 text-gray-400 hover:text-gray-500'>
                            <span className='text-sm font-medium text-gray-900'>
                              {section.name}
                            </span>
                            <span className='flex items-center ml-6 h-7'>
                              <HiChevronDown
                                className={clsx(
                                  open ? '-rotate-180' : 'rotate-0',
                                  'h-5 w-5 transform'
                                )}
                                aria-hidden='true'
                              />
                            </span>
                          </Disclosure.Button>
                        </legend>
                        <Disclosure.Panel className='px-4 pt-4 pb-2'>
                          <div className='space-y-6'>
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className='flex items-center'
                              >
                                <input
                                  id={`${section.id}-${optionIdx}-mobile`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  value={
                                    status[
                                      option.value as 'upcoming' | 'ended'
                                    ] + ''
                                  }
                                  onChange={() =>
                                    setStatus((status) => ({
                                      ...status,
                                      [option.value]:
                                        !status[
                                          option.value as 'upcoming' | 'ended'
                                        ],
                                    }))
                                  }
                                  type='checkbox'
                                  className='w-4 h-4 border-gray-300 rounded text-primary-600 focus:ring-primary-500'
                                />
                                <label
                                  htmlFor={`${section.id}-${optionIdx}-mobile`}
                                  className='ml-3 text-sm text-gray-500'
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </fieldset>
                    )}
                  </Disclosure>
                ))}
                <Disclosure
                  as='div'
                  className='pt-4 pb-4 border-t border-gray-200'
                >
                  {({ open }) => (
                    <fieldset>
                      <legend className='w-full px-2'>
                        <Disclosure.Button className='flex items-center justify-between w-full p-2 text-gray-400 hover:text-gray-500'>
                          <span className='text-sm font-medium text-gray-900'>
                            Cities
                          </span>
                          <span className='flex items-center ml-6 h-7'>
                            <HiChevronDown
                              className={clsx(
                                open ? '-rotate-180' : 'rotate-0',
                                'h-5 w-5 transform'
                              )}
                              aria-hidden='true'
                            />
                          </span>
                        </Disclosure.Button>
                      </legend>
                      <Disclosure.Panel className='px-4 pt-4 pb-2'>
                        <div className='pt-6 space-y-3'>
                          <div>
                            <select
                              value={selectedCity}
                              onChange={(e) => setSelectedCity(e.target.value)}
                              name='city'
                              id='city'
                              className={clsx(
                                'focus:ring-primary-500 border-gray-300 focus:border-primary-500',
                                'block w-full rounded-md shadow-sm'
                              )}
                              aria-describedby='city'
                            >
                              <option value='all'>All cities</option>
                              {cities.map((city) => (
                                <option key={city} value={city}>
                                  {city}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </Disclosure.Panel>
                    </fieldset>
                  )}
                </Disclosure>
              </form>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
      <main className='layout'>
        <div className='pb-10 border-b border-gray-200 pt-14 sm:pt-16 '>
          <h1 className='text-4xl font-extrabold tracking-tight text-gray-900'>
            <Accent>#SeasForUs</Accent> Events
          </h1>
          <p className='mt-4 text-base text-gray-500'>
            Find upcoming organized events to clean our seas together!
          </p>
        </div>
        <div className='pt-12 pb-24 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4'>
          <aside>
            <h2 className='sr-only'>Filters</h2>
            <button
              type='button'
              className='inline-flex items-center lg:hidden'
              onClick={() => setMobileFiltersOpen(true)}
            >
              <span className='text-sm font-medium text-gray-700'>Filters</span>
              <HiPlusSm
                className='flex-shrink-0 w-5 h-5 ml-1 text-gray-400'
                aria-hidden='true'
              />
            </button>
            {/* Filter for desktop */}
            <div className='hidden lg:block'>
              <form className='space-y-10 divide-y divide-gray-200'>
                <div>
                  <fieldset>
                    <legend className='block text-sm font-medium text-gray-900'>
                      Status
                    </legend>
                    <div className='pt-6 space-y-3'>
                      {statusFilter.map((option, optionIdx) => (
                        <div key={option.value} className='flex items-center'>
                          <input
                            id={`status-${optionIdx}`}
                            name={option.value}
                            defaultValue={option.value}
                            value={
                              status[option.value as 'upcoming' | 'ended'] + ''
                            }
                            onChange={() =>
                              setStatus((status) => ({
                                ...status,
                                [option.value]:
                                  !status[option.value as 'upcoming' | 'ended'],
                              }))
                            }
                            type='checkbox'
                            className='w-4 h-4 border-gray-300 rounded text-primary-600 focus:ring-primary-500'
                          />
                          <label
                            htmlFor={`status-${optionIdx}`}
                            className='ml-3 text-sm text-gray-600'
                          >
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </fieldset>
                </div>
                <div className='pt-10'>
                  <fieldset>
                    <legend className='block text-sm font-medium text-gray-900'>
                      Cities
                    </legend>
                    <div className='pt-6 space-y-3'>
                      <div>
                        <select
                          value={selectedCity}
                          onChange={(e) => setSelectedCity(e.target.value)}
                          name='city'
                          id='city'
                          className={clsx(
                            'focus:ring-primary-500 border-gray-300 focus:border-primary-500',
                            'block w-full rounded-md shadow-sm'
                          )}
                          aria-describedby='city'
                        >
                          <option value='all'>All cities</option>
                          {cities.map((city) => (
                            <option key={city} value={city}>
                              {city}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </form>
            </div>
          </aside>
          <section
            aria-labelledby='product-heading'
            className='mt-6 lg:mt-0 lg:col-span-2 xl:col-span-3'
          >
            <h2 id='product-heading' className='sr-only'>
              Products
            </h2>
            {isLoading ? (
              <div className='grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3'>
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className='bg-gray-400 animate-pulse h-[360px] rounded'
                  />
                ))}
              </div>
            ) : filteredProducts.length > 0 ? (
              <div className='grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3'>
                {filteredProducts.map((product) => (
                  <EventCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <h2>
                Event not found yet, contribute to <Accent>#SeasForUs</Accent>
              </h2>
            )}
          </section>
        </div>
      </main>
    </Layout>
  );
}
