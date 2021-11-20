/* eslint-disable @next/next/no-img-element */
import {
  Dialog,
  Disclosure,
  Popover,
  Tab,
  Transition,
} from '@headlessui/react';
import clsx from 'clsx';
import * as React from 'react';
import {
  HiChevronDown,
  HiOutlineMenu,
  HiOutlineSearch,
  HiOutlineShoppingBag,
  HiOutlineX,
  HiPlusSm,
} from 'react-icons/hi';

import Layout from '@/components/layout/Layout';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

//#region  //*=========== Data ===========
const navigation = {
  categories: [
    {
      id: 'women',
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt:
            'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt:
            'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Dresses', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Denim', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'T-Shirts', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Sunglasses', href: '#' },
            { name: 'Hats', href: '#' },
            { name: 'Belts', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Significant Other', href: '#' },
          ],
        },
      ],
    },
    {
      id: 'men',
      name: 'Men',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt:
            'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'T-Shirts', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Sunglasses', href: '#' },
            { name: 'Hats', href: '#' },
            { name: 'Belts', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
};
const breadcrumbs = [{ id: 1, name: 'Men', href: '#' }];
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
const products = [
  {
    id: 1,
    name: 'Pantai Kuta',
    href: '#',
    price: '$256',
    description:
      'Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.',
    options: '8 colors',
    imageSrc:
      'https://res.cloudinary.com/theodorusclarence/image/upload/f_auto,c_fill,ar_5:3,w_1200/v1637384615/seasforus/max-PqoCWV93yps-unsplash_asxwzj.jpg',
    imageAlt:
      'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
  },
  {
    id: 2,
    name: 'Pantai Anyer',
    href: '#',
    price: '$32',
    description:
      'Look like a visionary CEO and wear the same black t-shirt every day.',
    options: 'Black',
    imageSrc:
      'https://res.cloudinary.com/theodorusclarence/image/upload/f_auto,c_fill,ar_5:3,w_1200/v1637384611/seasforus/rowan-heuvel-U6t80TWJ1DM-unsplash_oiwlnq.jpg',
    imageAlt: 'Front of plain black t-shirt.',
  },
  // More products...
];
const footerNavigation = {
  products: [
    { name: 'Bags', href: '#' },
    { name: 'Tees', href: '#' },
    { name: 'Objects', href: '#' },
    { name: 'Home Goods', href: '#' },
    { name: 'Accessories', href: '#' },
  ],
  company: [
    { name: 'Who we are', href: '#' },
    { name: 'Sustainability', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Privacy', href: '#' },
  ],
  customerService: [
    { name: 'Contact', href: '#' },
    { name: 'Shipping', href: '#' },
    { name: 'Returns', href: '#' },
    { name: 'Warranty', href: '#' },
    { name: 'Secure Payments', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Find a store', href: '#' },
  ],
};
//#endregion  //*======== Data ===========

export default function EventsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = React.useState(false);

  return (
    <Layout>
      <Seo templateTitle='Browse Events' />

      <div className='bg-white'>
        <div>
          {/* Mobile menu */}
          <Transition.Root show={mobileMenuOpen} as={React.Fragment}>
            <Dialog
              as='div'
              className='fixed inset-0 z-40 flex lg:hidden'
              onClose={setMobileMenuOpen}
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
                enterFrom='-translate-x-full'
                enterTo='translate-x-0'
                leave='transition ease-in-out duration-300 transform'
                leaveFrom='translate-x-0'
                leaveTo='-translate-x-full'
              >
                <div className='relative flex flex-col w-full max-w-xs pb-12 overflow-y-auto bg-white shadow-xl'>
                  <div className='flex px-4 pt-5 pb-2'>
                    <button
                      type='button'
                      className='inline-flex items-center justify-center p-2 -m-2 text-gray-400 rounded-md'
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className='sr-only'>Close menu</span>
                      <HiOutlineX className='w-6 h-6' aria-hidden='true' />
                    </button>
                  </div>
                  {/* Links */}
                  <Tab.Group as='div' className='mt-2'>
                    <div className='border-b border-gray-200'>
                      <Tab.List className='flex px-4 -mb-px space-x-8'>
                        {navigation.categories.map((category) => (
                          <Tab
                            key={category.name}
                            className={({ selected }) =>
                              clsx(
                                selected
                                  ? 'text-primary-600 border-primary-600'
                                  : 'text-gray-900 border-transparent',
                                'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium'
                              )
                            }
                          >
                            {category.name}
                          </Tab>
                        ))}
                      </Tab.List>
                    </div>
                    <Tab.Panels as={React.Fragment}>
                      {navigation.categories.map((category) => (
                        <Tab.Panel
                          key={category.name}
                          className='px-4 pt-10 pb-8 space-y-10'
                        >
                          <div className='grid grid-cols-2 gap-x-4'>
                            {category.featured.map((item) => (
                              <div
                                key={item.name}
                                className='relative text-sm group'
                              >
                                <div className='overflow-hidden bg-gray-100 rounded-lg aspect-w-1 aspect-h-1 group-hover:opacity-75'>
                                  <img
                                    src={item.imageSrc}
                                    alt={item.imageAlt}
                                    className='object-cover object-center'
                                  />
                                </div>
                                <UnstyledLink
                                  href={item.href}
                                  className='block mt-6 font-medium text-gray-900'
                                >
                                  <span
                                    className='absolute inset-0 z-10'
                                    aria-hidden='true'
                                  />
                                  {item.name}
                                </UnstyledLink>
                                <p aria-hidden='true' className='mt-1'>
                                  Shop now
                                </p>
                              </div>
                            ))}
                          </div>
                          {category.sections.map((section) => (
                            <div key={section.name}>
                              <p
                                id={`${category.id}-${section.id}-heading-mobile`}
                                className='font-medium text-gray-900'
                              >
                                {section.name}
                              </p>
                              <ul
                                role='list'
                                aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                className='flex flex-col mt-6 space-y-6'
                              >
                                {section.items.map((item) => (
                                  <li key={item.name} className='flow-root'>
                                    <UnstyledLink
                                      href={item.href}
                                      className='block p-2 -m-2 text-gray-500'
                                    >
                                      {item.name}
                                    </UnstyledLink>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </Tab.Panel>
                      ))}
                    </Tab.Panels>
                  </Tab.Group>
                  <div className='px-4 py-6 space-y-6 border-t border-gray-200'>
                    {navigation.pages.map((page) => (
                      <div key={page.name} className='flow-root'>
                        <UnstyledLink
                          href={page.href}
                          className='block p-2 -m-2 font-medium text-gray-900'
                        >
                          {page.name}
                        </UnstyledLink>
                      </div>
                    ))}
                  </div>
                  <div className='px-4 py-6 space-y-6 border-t border-gray-200'>
                    <div className='flow-root'>
                      <UnstyledLink
                        href='#'
                        className='block p-2 -m-2 font-medium text-gray-900'
                      >
                        Sign in
                      </UnstyledLink>
                    </div>
                    <div className='flow-root'>
                      <UnstyledLink
                        href='#'
                        className='block p-2 -m-2 font-medium text-gray-900'
                      >
                        Create account
                      </UnstyledLink>
                    </div>
                  </div>
                  <div className='px-4 py-6 border-t border-gray-200'>
                    <UnstyledLink
                      href='#'
                      className='flex items-center p-2 -m-2'
                    >
                      <img
                        src='https://tailwindui.com/img/flags/flag-canada.svg'
                        alt=''
                        className='flex-shrink-0 block w-5 h-auto'
                      />
                      <span className='block ml-3 text-base font-medium text-gray-900'>
                        CAD
                      </span>
                      <span className='sr-only'>, change currency</span>
                    </UnstyledLink>
                  </div>
                </div>
              </Transition.Child>
            </Dialog>
          </Transition.Root>
          <header className='relative bg-white'>
            <p className='flex items-center justify-center h-10 px-4 text-sm font-medium text-white bg-primary-600 sm:px-6 lg:px-8'>
              Get free delivery on orders over $100
            </p>
            <nav
              aria-label='Top'
              className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'
            >
              <div className='border-b border-gray-200'>
                <div className='flex items-center h-16'>
                  <button
                    type='button'
                    className='p-2 text-gray-400 bg-white rounded-md lg:hidden'
                    onClick={() => setMobileMenuOpen(true)}
                  >
                    <span className='sr-only'>Open menu</span>
                    <HiOutlineMenu className='w-6 h-6' aria-hidden='true' />
                  </button>
                  {/* Logo */}
                  <div className='flex ml-4 lg:ml-0'>
                    <UnstyledLink href='#'>
                      <span className='sr-only'>Workflow</span>
                      <img
                        className='w-auto h-8'
                        src='https://tailwindui.com/img/logos/workflow-mark.svg?color=primary&shade=600'
                        alt=''
                      />
                    </UnstyledLink>
                  </div>
                  {/* Flyout menus */}
                  <Popover.Group className='hidden lg:ml-8 lg:block lg:self-stretch'>
                    <div className='flex h-full space-x-8'>
                      {navigation.categories.map((category) => (
                        <Popover key={category.name} className='flex'>
                          {({ open }) => (
                            <>
                              <div className='relative flex'>
                                <Popover.Button
                                  className={clsx(
                                    open
                                      ? 'border-primary-600 text-primary-600'
                                      : 'border-transparent text-gray-700 hover:text-gray-800',
                                    'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px'
                                  )}
                                >
                                  {category.name}
                                </Popover.Button>
                              </div>
                              <Transition
                                as={React.Fragment}
                                enter='transition ease-out duration-200'
                                enterFrom='opacity-0'
                                enterTo='opacity-100'
                                leave='transition ease-in duration-150'
                                leaveFrom='opacity-100'
                                leaveTo='opacity-0'
                              >
                                <Popover.Panel className='absolute inset-x-0 z-10 text-sm text-gray-500 top-full'>
                                  {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                  <div
                                    className='absolute inset-0 bg-white shadow top-1/2'
                                    aria-hidden='true'
                                  />
                                  <div className='relative bg-white'>
                                    <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
                                      <div className='grid grid-cols-2 py-16 gap-y-10 gap-x-8'>
                                        <div className='grid grid-cols-2 col-start-2 gap-x-8'>
                                          {category.featured.map((item) => (
                                            <div
                                              key={item.name}
                                              className='relative text-base group sm:text-sm'
                                            >
                                              <div className='overflow-hidden bg-gray-100 rounded-lg aspect-w-1 aspect-h-1 group-hover:opacity-75'>
                                                <img
                                                  src={item.imageSrc}
                                                  alt={item.imageAlt}
                                                  className='object-cover object-center'
                                                />
                                              </div>
                                              <UnstyledLink
                                                href={item.href}
                                                className='block mt-6 font-medium text-gray-900'
                                              >
                                                <span
                                                  className='absolute inset-0 z-10'
                                                  aria-hidden='true'
                                                />
                                                {item.name}
                                              </UnstyledLink>
                                              <p
                                                aria-hidden='true'
                                                className='mt-1'
                                              >
                                                Shop now
                                              </p>
                                            </div>
                                          ))}
                                        </div>
                                        <div className='grid grid-cols-3 row-start-1 text-sm gap-y-10 gap-x-8'>
                                          {category.sections.map((section) => (
                                            <div key={section.name}>
                                              <p
                                                id={`${section.name}-heading`}
                                                className='font-medium text-gray-900'
                                              >
                                                {section.name}
                                              </p>
                                              <ul
                                                role='list'
                                                aria-labelledby={`${section.name}-heading`}
                                                className='mt-6 space-y-6 sm:mt-4 sm:space-y-4'
                                              >
                                                {section.items.map((item) => (
                                                  <li
                                                    key={item.name}
                                                    className='flex'
                                                  >
                                                    <UnstyledLink
                                                      href={item.href}
                                                      className='hover:text-gray-800'
                                                    >
                                                      {item.name}
                                                    </UnstyledLink>
                                                  </li>
                                                ))}
                                              </ul>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </Popover.Panel>
                              </Transition>
                            </>
                          )}
                        </Popover>
                      ))}
                      {navigation.pages.map((page) => (
                        <UnstyledLink
                          key={page.name}
                          href={page.href}
                          className='flex items-center text-sm font-medium text-gray-700 hover:text-gray-800'
                        >
                          {page.name}
                        </UnstyledLink>
                      ))}
                    </div>
                  </Popover.Group>
                  <div className='flex items-center ml-auto'>
                    <div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>
                      <UnstyledLink
                        href='#'
                        className='text-sm font-medium text-gray-700 hover:text-gray-800'
                      >
                        Sign in
                      </UnstyledLink>
                      <span
                        className='w-px h-6 bg-gray-200'
                        aria-hidden='true'
                      />
                      <UnstyledLink
                        href='#'
                        className='text-sm font-medium text-gray-700 hover:text-gray-800'
                      >
                        Create account
                      </UnstyledLink>
                    </div>
                    <div className='hidden lg:ml-8 lg:flex'>
                      <UnstyledLink
                        href='#'
                        className='flex items-center text-gray-700 hover:text-gray-800'
                      >
                        <img
                          src='https://tailwindui.com/img/flags/flag-canada.svg'
                          alt=''
                          className='flex-shrink-0 block w-5 h-auto'
                        />
                        <span className='block ml-3 text-sm font-medium'>
                          CAD
                        </span>
                        <span className='sr-only'>, change currency</span>
                      </UnstyledLink>
                    </div>
                    {/* Search */}
                    <div className='flex lg:ml-6'>
                      <UnstyledLink
                        href='#'
                        className='p-2 text-gray-400 hover:text-gray-500'
                      >
                        <span className='sr-only'>Search</span>
                        <HiOutlineSearch
                          className='w-6 h-6'
                          aria-hidden='true'
                        />
                      </UnstyledLink>
                    </div>
                    {/* Cart */}
                    <div className='flow-root ml-4 lg:ml-6'>
                      <UnstyledLink
                        href='#'
                        className='flex items-center p-2 -m-2 group'
                      >
                        <HiOutlineShoppingBag
                          className='flex-shrink-0 w-6 h-6 text-gray-400 group-hover:text-gray-500'
                          aria-hidden='true'
                        />
                        <span className='ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800'>
                          0
                        </span>
                        <span className='sr-only'>items in cart, view bag</span>
                      </UnstyledLink>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </header>
        </div>
        <div>
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
                    <h2 className='text-lg font-medium text-gray-900'>
                      Filters
                    </h2>
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
          <div className='border-b border-gray-200'>
            <nav
              aria-label='Breadcrumb'
              className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'
            >
              <ol role='list' className='flex items-center py-4 space-x-4'>
                {breadcrumbs.map((breadcrumb) => (
                  <li key={breadcrumb.id}>
                    <div className='flex items-center'>
                      <UnstyledLink
                        href={breadcrumb.href}
                        className='mr-4 text-sm font-medium text-gray-900'
                      >
                        {breadcrumb.name}
                      </UnstyledLink>
                      <svg
                        viewBox='0 0 6 20'
                        xmlns='http://www.w3.org/2000/svg'
                        aria-hidden='true'
                        className='w-auto h-5 text-gray-300'
                      >
                        <path
                          d='M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z'
                          fill='currentColor'
                        />
                      </svg>
                    </div>
                  </li>
                ))}
                <li className='text-sm'>
                  <UnstyledLink
                    href='#'
                    aria-current='page'
                    className='font-medium text-gray-500 hover:text-gray-600'
                  >
                    New Arrivals
                  </UnstyledLink>
                </li>
              </ol>
            </nav>
          </div>
          <main className='max-w-2xl px-4 mx-auto lg:max-w-7xl lg:px-8'>
            <div className='pt-24 pb-10 border-b border-gray-200'>
              <h1 className='text-4xl font-extrabold tracking-tight text-gray-900'>
                New Arrivals
              </h1>
              <p className='mt-4 text-base text-gray-500'>
                Checkout out the latest release of Basic Tees, new and improved
                with four openings!
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
                  <span className='text-sm font-medium text-gray-700'>
                    Filters
                  </span>
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
                              <div
                                key={option.value}
                                className='flex items-center'
                              >
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
                    <div
                      key={product.id}
                      className='relative flex flex-col overflow-hidden bg-white border border-gray-200 rounded-lg group'
                    >
                      <div className='bg-gray-200 aspect-w-5 aspect-h-3 group-hover:opacity-75'>
                        <NextImage
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          className='object-cover object-center w-full h-full sm:w-full sm:h-full'
                          width='1200'
                          height='720'
                        />
                      </div>
                      <div className='flex flex-col flex-1 p-4 space-y-2'>
                        <h3 className='text-sm font-medium text-gray-900'>
                          <UnstyledLink href={product.href}>
                            <span
                              aria-hidden='true'
                              className='absolute inset-0'
                            />
                            {product.name}
                          </UnstyledLink>
                        </h3>
                        <p className='text-sm text-gray-500'>
                          {product.description}
                        </p>
                        <div className='flex flex-col justify-end flex-1'>
                          <p className='text-sm italic text-gray-500'>
                            {product.options}
                          </p>
                          <p className='text-base font-medium text-gray-900'>
                            {product.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </main>
          <footer
            aria-labelledby='footer-heading'
            className='bg-white border-t border-gray-200'
          >
            <h2 id='footer-heading' className='sr-only'>
              Footer
            </h2>
            <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
              <div className='py-20'>
                <div className='grid grid-cols-1 md:grid-cols-12 md:grid-flow-col md:gap-x-8 md:gap-y-16 md:auto-rows-min'>
                  {/* Image section */}
                  <div className='col-span-1 md:col-span-2 lg:row-start-1 lg:col-start-1'>
                    <img
                      src='https://tailwindui.com/img/logos/workflow-mark.svg?color=primary&shade=600'
                      alt=''
                      className='w-auto h-8'
                    />
                  </div>
                  {/* Sitemap sections */}
                  <div className='grid grid-cols-2 col-span-6 gap-8 mt-10 sm:grid-cols-3 md:mt-0 md:row-start-1 md:col-start-3 md:col-span-8 lg:col-start-2 lg:col-span-6'>
                    <div className='grid grid-cols-1 gap-y-12 sm:col-span-2 sm:grid-cols-2 sm:gap-x-8'>
                      <div>
                        <h3 className='text-sm font-medium text-gray-900'>
                          Products
                        </h3>
                        <ul role='list' className='mt-6 space-y-6'>
                          {footerNavigation.products.map((item) => (
                            <li key={item.name} className='text-sm'>
                              <UnstyledLink
                                href={item.href}
                                className='text-gray-500 hover:text-gray-600'
                              >
                                {item.name}
                              </UnstyledLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className='text-sm font-medium text-gray-900'>
                          Company
                        </h3>
                        <ul role='list' className='mt-6 space-y-6'>
                          {footerNavigation.company.map((item) => (
                            <li key={item.name} className='text-sm'>
                              <UnstyledLink
                                href={item.href}
                                className='text-gray-500 hover:text-gray-600'
                              >
                                {item.name}
                              </UnstyledLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h3 className='text-sm font-medium text-gray-900'>
                        Customer Service
                      </h3>
                      <ul role='list' className='mt-6 space-y-6'>
                        {footerNavigation.customerService.map((item) => (
                          <li key={item.name} className='text-sm'>
                            <UnstyledLink
                              href={item.href}
                              className='text-gray-500 hover:text-gray-600'
                            >
                              {item.name}
                            </UnstyledLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {/* Newsletter section */}
                  <div className='mt-12 md:mt-0 md:row-start-2 md:col-start-3 md:col-span-8 lg:row-start-1 lg:col-start-9 lg:col-span-4'>
                    <h3 className='text-sm font-medium text-gray-900'>
                      Sign up for our newsletter
                    </h3>
                    <p className='mt-6 text-sm text-gray-500'>
                      The latest deals and savings, sent to your inbox weekly.
                    </p>
                    <form className='flex mt-2 sm:max-w-md'>
                      <label htmlFor='email-address' className='sr-only'>
                        Email address
                      </label>
                      <input
                        id='email-address'
                        type='text'
                        autoComplete='email'
                        required
                        className='w-full min-w-0 px-4 py-2 text-base text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500'
                      />
                      <div className='flex-shrink-0 ml-4'>
                        <button
                          type='submit'
                          className='flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500'
                        >
                          Sign up
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className='py-10 text-center border-t border-gray-100'>
                <p className='text-sm text-gray-500'>
                  &copy; 2021 Workflow, Inc. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </Layout>
  );
}
