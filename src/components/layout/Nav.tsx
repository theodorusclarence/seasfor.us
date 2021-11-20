/* eslint-disable @next/next/no-img-element */
import { Dialog, Menu, Popover, Tab, Transition } from '@headlessui/react';
import clsx from 'clsx';
import * as React from 'react';
import {
  HiChevronDown,
  HiOutlineMenu,
  HiOutlineUser,
  HiOutlineX,
} from 'react-icons/hi';

import UnstyledLink from '@/components/links/UnstyledLink';

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
            'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt:
            'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
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

type NavProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileNav = ({ open, setOpen }: NavProps) => {
  return (
    <Transition.Root show={open} as={React.Fragment}>
      <Dialog
        as='div'
        className='fixed inset-0 z-40 flex lg:hidden'
        onClose={setOpen}
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
                onClick={() => setOpen(false)}
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
                        <div key={item.name} className='relative text-sm group'>
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
                  href='/signin'
                  className='block p-2 -m-2 font-medium text-gray-900'
                >
                  Sign in
                </UnstyledLink>
              </div>
              <div className='flow-root'>
                <UnstyledLink
                  href='/signup'
                  className='block p-2 -m-2 font-medium text-gray-900'
                >
                  Create an account
                </UnstyledLink>
              </div>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};

const DesktopNav = ({ setOpen }: NavProps) => {
  // eslint-disable-next-line no-console
  const handleLogout = () => console.log('logout');

  return (
    <nav
      aria-label='Top'
      className='relative z-20 flex items-center justify-between min-h-[3.5rem] lg:min-h-[4.5rem] bg-white bg-opacity-90 backdrop-filter backdrop-blur-xl layout'
    >
      <div className='flex items-center'>
        <button
          type='button'
          className='p-2 text-gray-400 bg-white rounded-md lg:hidden'
          onClick={() => setOpen(true)}
        >
          <span className='sr-only'>Open menu</span>
          <HiOutlineMenu className='w-6 h-6' aria-hidden='true' />
        </button>

        {/* Logo */}
        <div className='flex ml-4 lg:ml-0'>
          <UnstyledLink href='/'>
            <span className='sr-only'>seasfor.us</span>
            <img
              className='w-auto h-12'
              src='/images/teamseas-logo.png'
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
                      <Popover.Panel className='absolute inset-x-0 text-sm text-gray-500 bg-white top-full'>
                        {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                        <div
                          className='absolute inset-0 bg-white shadow top-1/2'
                          aria-hidden='true'
                        />
                        {/* Fake border when menu is open */}
                        <div
                          className='absolute inset-0 top-0 h-px px-8 mx-auto max-w-7xl'
                          aria-hidden='true'
                        >
                          <div
                            className={clsx(
                              open ? 'bg-gray-200' : 'bg-transparent',
                              'w-full h-px transition-colors ease-out duration-200'
                            )}
                          />
                        </div>

                        <div className='relative'>
                          <div className='px-8 mx-auto max-w-7xl'>
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
                                    <p aria-hidden='true' className='mt-1'>
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
                                        <li key={item.name} className='flex'>
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
      </div>

      <div className='flex items-center'>
        <div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>
          <UnstyledLink
            href='/signin'
            className='text-sm font-medium text-gray-700 hover:text-gray-800'
          >
            Sign in
          </UnstyledLink>
          <span className='w-px h-6 bg-gray-200' aria-hidden='true' />
          <UnstyledLink
            href='/signup'
            className='text-sm font-medium text-gray-700 hover:text-gray-800'
          >
            Create an account
          </UnstyledLink>
        </div>

        {/* Cart */}
        <Menu as='div' className='relative ml-3 group'>
          {({ open }) => (
            <>
              <div>
                <Menu.Button className='flex items-center max-w-xs text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-400 lg:p-2 lg:rounded-md lg:hover:bg-gray-50'>
                  <HiOutlineUser className='flex-shrink-0 w-6 h-6 text-gray-400 group-hover:text-gray-500' />
                  <span className='hidden ml-3 text-sm font-medium text-gray-700 lg:block'>
                    <span className='sr-only'>Open user menu for </span>
                    User
                  </span>
                  <HiChevronDown
                    className='flex-shrink-0 hidden w-5 h-5 ml-1 text-gray-400 lg:block'
                    aria-hidden='true'
                  />
                </Menu.Button>
              </div>
              <Transition
                show={open}
                as={React.Fragment}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'
              >
                <Menu.Items
                  static
                  className='absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
                >
                  <button
                    onClick={handleLogout}
                    className='block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100'
                  >
                    Logout
                  </button>
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      </div>
    </nav>
  );
};

const Nav = {
  Desktop: DesktopNav,
  Mobile: MobileNav,
};

export default Nav;
