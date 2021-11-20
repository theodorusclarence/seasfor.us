import clsx from 'clsx';
import * as React from 'react';

import { products } from '@/data/products';

import Accent from '@/components/Accent';
import EventCard from '@/components/events/EventCard';
import Layout from '@/components/layout/Layout';
import CustomLink from '@/components/links/CustomLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

const testimonials = [
  {
    id: 1,
    quote:
      'I enjoyed my time cleaning the beach with my fellow #TeamSeas. Thanks for the platform so we can meet for better cause.',
    attribution: 'Clarence, Indonesia',
  },
  {
    id: 2,
    quote:
      'Really glad that I can directly help #TeamSeas to clean-up trash from the ocean as much as possible. Thank you #SeasForUs, the process is really simple and straightforward!',
    attribution: 'Rizqi, Maldives',
  },
  {
    id: 3,
    quote:
      'Thanks to #SeasForUs, I meet new friends that is passionate and want to take actions about the concerning trash problem in the ocean.',
    attribution: 'Zhafran, Canada',
  },
];

export default function IndexPage() {
  return (
    <Layout>
      <Seo />

      <div className='bg-white'>
        <main>
          {/* Hero */}
          <div className='flex flex-col border-b border-gray-200 lg:border-0'>
            <div className='relative'>
              <div
                aria-hidden='true'
                className='absolute hidden w-1/2 h-full bg-gray-100 lg:block'
              />
              <div className='relative bg-gray-100 lg:bg-transparent'>
                <div className='layout lg:grid lg:grid-cols-2'>
                  <div className='flex flex-col max-w-2xl py-24 mx-auto lg:justify-center lg:min-h-main lg:py-0 lg:max-w-none'>
                    <div className='lg:pr-16'>
                      <h1 className='text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl'>
                        Support{' '}
                        <CustomLink href='https://teamseas.org'>
                          <Accent>#TeamSeas</Accent>
                        </CustomLink>{' '}
                        starting from you.
                      </h1>
                      <p className='mt-4 text-xl text-gray-600'>
                        <Accent>#SeasForUs</Accent> will help you organize beach
                        clean-up in your local area.
                      </p>
                      <div className='mt-6'>
                        <UnstyledLink
                          href='/events'
                          className='inline-block px-8 py-3 font-medium text-white border border-transparent rounded-md bg-primary-600 hover:bg-primary-700'
                        >
                          Look for events
                        </UnstyledLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='hidden w-full h-48 sm:h-64 lg:block lg:absolute lg:top-0 lg:right-0 lg:w-1/2 lg:h-full'>
                <NextImage
                  src='https://res.cloudinary.com/theodorusclarence/image/upload/f_auto,w_1200/v1637384615/seasforus/seas-hero_ypzm3n.jpg'
                  alt='Image of sea'
                  title='Image from freepik'
                  width={1200}
                  height={736}
                  className='object-cover object-center w-full h-full'
                  objectFit='cover'
                  objectPosition='center'
                  layout='fill'
                />
              </div>
            </div>
          </div>

          {/* Trending products */}
          <section aria-labelledby='trending-heading' className='bg-white'>
            <div className='py-16 sm:py-24 layout lg:py-32'>
              <div className='flex items-center justify-between'>
                <h2
                  id='trending-heading'
                  className='text-2xl font-extrabold tracking-tight text-gray-900'
                >
                  Upcoming Events
                </h2>
                <a
                  href='#'
                  className='hidden text-sm font-semibold text-primary-600 sm:block hover:text-primary-500'
                >
                  See everything<span aria-hidden='true'> &rarr;</span>
                </a>
              </div>
              <div className='relative mt-8'>
                <div className='relative w-full overflow-x-auto'>
                  <ul
                    role='list'
                    className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                  >
                    {products.slice(0, 4).map((product, i) => (
                      <EventCard
                        key={product.id}
                        className={clsx({
                          'sm:hidden lg:block': i === 2,
                          'sm:hidden xl:block': i === 3,
                        })}
                        product={product}
                      />
                    ))}
                  </ul>
                </div>
              </div>
              <div className='px-4 mt-12 sm:hidden'>
                <a
                  href='#'
                  className='text-sm font-semibold text-primary-600 hover:text-primary-500'
                >
                  See everything<span aria-hidden='true'> &rarr;</span>
                </a>
              </div>
            </div>
          </section>

          {/* Sale and testimonials */}
          <div className='relative overflow-hidden'>
            {/* Decorative background image and gradient */}
            <div aria-hidden='true' className='absolute inset-0'>
              <div className='absolute inset-0 overflow-hidden'>
                <NextImage
                  src='https://res.cloudinary.com/theodorusclarence/image/upload/f_auto,w_1200/v1637384615/seasforus/christoffer-engstrom-wc9avd2RaN0-unsplash_djb7pv.jpg'
                  alt='Water splashing in the ocean'
                  width={1920}
                  height={1280}
                  className='object-cover object-center w-full h-full'
                  objectFit='cover'
                  objectPosition='center'
                  layout='fill'
                />
              </div>
              <div className='absolute inset-0 bg-white bg-opacity-75' />
              <div className='absolute inset-0 bg-gradient-to-t from-white via-white' />
            </div>
            {/* Sale */}
            <section
              aria-labelledby='sale-heading'
              className='relative flex flex-col items-center pt-32 text-center layout'
            >
              <div className='max-w-2xl mx-auto lg:max-w-none'>
                <h2
                  id='sale-heading'
                  className='text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl'
                >
                  Want to organize in your local area?
                </h2>
                <p className='max-w-xl mx-auto mt-4 text-xl text-gray-600'>
                  Contact us and be the lead organizer. We really appreciate
                  your contribution to help <Accent>#TeamSeas</Accent> and{' '}
                  <Accent>#SeasForUs</Accent>
                </p>
                <a
                  href='#'
                  className='inline-block w-full px-8 py-3 mt-6 font-medium text-white bg-gray-900 border border-transparent rounded-md hover:bg-gray-800 sm:w-auto'
                >
                  Contact Us
                </a>
              </div>
            </section>
            {/* Testimonials */}
            <section
              aria-labelledby='testimonial-heading'
              className='relative py-24 layout lg:py-32'
            >
              <div className='max-w-2xl mx-auto lg:max-w-none'>
                <h2
                  id='testimonial-heading'
                  className='text-2xl font-extrabold tracking-tight text-gray-900'
                >
                  What are people saying?
                </h2>
                <div className='mt-16 space-y-16 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8'>
                  {testimonials.map((testimonial) => (
                    <blockquote
                      key={testimonial.id}
                      className='sm:flex lg:block'
                    >
                      <svg
                        width={24}
                        height={18}
                        viewBox='0 0 24 18'
                        xmlns='http://www.w3.org/2000/svg'
                        aria-hidden='true'
                        className='flex-shrink-0 text-gray-300'
                      >
                        <path
                          d='M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z'
                          fill='currentColor'
                        />
                      </svg>
                      <div className='mt-8 sm:mt-0 sm:ml-6 lg:mt-10 lg:ml-0'>
                        <p className='text-lg text-gray-600'>
                          {testimonial.quote}
                        </p>
                        <cite className='block mt-4 not-italic font-semibold text-gray-900'>
                          {testimonial.attribution}
                        </cite>
                      </div>
                    </blockquote>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </Layout>
  );
}
