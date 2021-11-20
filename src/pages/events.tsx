/* eslint-disable @next/next/no-img-element */
import { Dialog, Disclosure, Transition } from '@headlessui/react';
import clsx from 'clsx';
import * as React from 'react';
import { HiChevronDown, HiOutlineX, HiPlusSm } from 'react-icons/hi';

import { products } from '@/data/products';

import Accent from '@/components/Accent';
import EventCard from '@/components/events/EventCard';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

//#region  //*=========== Data ===========
const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White' },
      { value: 'beige', label: 'Beige' },
      { value: 'blue', label: 'Blue' },
      { value: 'brown', label: 'Brown' },
      { value: 'green', label: 'Green' },
      { value: 'purple', label: 'Purple' },
    ],
  },
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'new-arrivals', label: 'All New Arrivals' },
      { value: 'tees', label: 'Tees' },
      { value: 'crewnecks', label: 'Crewnecks' },
      { value: 'sweatshirts', label: 'Sweatshirts' },
      { value: 'pants-shorts', label: 'Pants & Shorts' },
    ],
  },
  {
    id: 'sizes',
    name: 'Sizes',
    options: [
      { value: 'xs', label: 'XS' },
      { value: 's', label: 'S' },
      { value: 'm', label: 'M' },
      { value: 'l', label: 'L' },
      { value: 'xl', label: 'XL' },
      { value: '2xl', label: '2XL' },
    ],
  },
];
//#endregion  //*======== Data ===========

export default function EventsPage() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = React.useState(false);

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
              </form>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
      <main className='layout'>
        <div className='pb-10 border-b border-gray-200 pt-14 sm:pt-16 '>
          <h1 className='text-4xl font-extrabold tracking-tight text-gray-900'>
            <Accent>#seasforus</Accent> Events
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
            <div className='hidden lg:block'>
              <form className='space-y-10 divide-y divide-gray-200'>
                {filters.map((section, sectionIdx) => (
                  <div
                    key={section.name}
                    className={sectionIdx === 0 ? '' : 'pt-10'}
                  >
                    <fieldset>
                      <legend className='block text-sm font-medium text-gray-900'>
                        {section.name}
                      </legend>
                      <div className='pt-6 space-y-3'>
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className='flex items-center'>
                            <input
                              id={`${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              defaultValue={option.value}
                              type='checkbox'
                              className='w-4 h-4 border-gray-300 rounded text-primary-600 focus:ring-primary-500'
                            />
                            <label
                              htmlFor={`${section.id}-${optionIdx}`}
                              className='ml-3 text-sm text-gray-600'
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </fieldset>
                  </div>
                ))}
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
            <div className='grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3'>
              {products.map((product) => (
                <EventCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
