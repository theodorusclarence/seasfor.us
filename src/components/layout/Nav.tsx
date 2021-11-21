/* eslint-disable @next/next/no-img-element */
import { Dialog, Menu, Transition } from '@headlessui/react';
import clsx from 'clsx';
import * as React from 'react';
import { HiChevronDown, HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';

import { loginUrl } from '@/constant/api';
import useAuthStore from '@/store/useAuthStore';

const navItems = [
  { name: 'Events', href: '/events' },
  { name: 'Leaderboard', href: '/leaderboard' },
];

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
            <div className='px-4 py-6 space-y-6 border-t border-gray-200'>
              {navItems.map((item) => (
                <div key={item.name} className='flow-root'>
                  <UnstyledLink
                    href={item.href}
                    className='block p-2 -m-2 font-medium text-gray-900'
                  >
                    {item.name}
                  </UnstyledLink>
                </div>
              ))}
            </div>

            <div className='px-4 py-6 space-y-6 border-t border-gray-200'>
              <div className='flow-root'>
                <UnstyledLink
                  href={loginUrl}
                  openNewTab={false}
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
  const isAuthenticated = useAuthStore.useIsAuthenticated();
  const logout = useAuthStore.useLogout();
  const user = useAuthStore.useUser();

  // eslint-disable-next-line no-console
  const handleLogout = () => logout();

  return (
    <nav
      aria-label='Top'
      className={clsx(
        'relative z-20  min-h-[3.5rem] lg:min-h-[4.5rem] layout',
        'flex items-center justify-between',
        'bg-white bg-opacity-90 backdrop-filter backdrop-blur-xl'
      )}
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
        <div className='hidden lg:ml-8 lg:block lg:self-stretch'>
          <div className='flex h-full space-x-8'>
            {navItems.map((item) => (
              <UnstyledLink
                key={item.name}
                href={item.href}
                className='flex items-center text-sm font-medium text-gray-700 hover:text-gray-800'
              >
                {item.name}
              </UnstyledLink>
            ))}
          </div>
        </div>
      </div>

      <div className='flex items-center'>
        {isAuthenticated && user ? (
          <Menu as='div' className='relative ml-3 group'>
            {({ open }) => (
              <>
                <div>
                  <Menu.Button className='flex items-center max-w-xs text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-400 lg:p-2 lg:rounded-md lg:hover:bg-gray-50'>
                    <div className='w-8 h-8 overflow-hidden rounded-full'>
                      <NextImage
                        src={user.photo}
                        alt={user.name}
                        className='w-full h-full '
                        width={256}
                        height={256}
                      />
                    </div>
                    <span className='hidden ml-3 text-sm font-medium text-gray-700 lg:block'>
                      <span className='sr-only'>Open user menu for </span>
                      {user.name}
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
                    <Menu.Item>
                      {({ active }) => (
                        <UnstyledLink
                          href='/myevents'
                          className={clsx(
                            active ? 'bg-gray-100' : '',
                            'block px-4 py-2 text-sm text-gray-700'
                          )}
                        >
                          My Events
                        </UnstyledLink>
                      )}
                    </Menu.Item>
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
        ) : (
          <div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>
            <UnstyledLink
              href={loginUrl}
              openNewTab={false}
              className='text-sm font-medium text-gray-700 hover:text-gray-800'
            >
              Sign in
            </UnstyledLink>
          </div>
        )}
      </div>
    </nav>
  );
};

const Nav = {
  Desktop: DesktopNav,
  Mobile: MobileNav,
};

export default Nav;
