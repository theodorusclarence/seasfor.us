/* eslint-disable @next/next/no-img-element */
import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import * as React from 'react';
import toast from 'react-hot-toast';
import {
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineUser,
} from 'react-icons/hi';

import { simulateGet } from '@/lib/helper';

import { products } from '@/data/products';

import Accent from '@/components/Accent';
import Button from '@/components/buttons/Button';
import EventCard from '@/components/events/EventCard';
import Layout from '@/components/layout/Layout';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import PhotoFormModal from '@/container/PhotoFormModal';

import { defaultToastMessage } from '@/constant/toast';

const product = products[0];
const reviews = {
  average: 4,
  featured: [
    {
      id: 1,
      rating: 5,
      content: `
        <p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
      `,
      date: 'July 16, 2021',
      datetime: '2021-07-16',
      author: 'Emily Selman',
      avatarSrc:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
    {
      id: 2,
      rating: 5,
      content: `
        <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
      `,
      date: 'July 12, 2021',
      datetime: '2021-07-12',
      author: 'Hector Gibbons',
      avatarSrc:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
    // More reviews...
  ],
};
const faqs = [
  {
    question: 'What format are these icons?',
    answer:
      'The icons are in SVG (Scalable Vector Graphic) format. They can be imported into your design tool of choice and used directly in code.',
  },
  {
    question: 'Can I use the icons at different sizes?',
    answer:
      "Yes. The icons are drawn on a 24 x 24 pixel grid, but the icons can be scaled to different sizes as needed. We don't recommend going smaller than 20 x 20 or larger than 64 x 64 to retain legibility and visual balance.",
  },
  // More FAQs...
];
const relatedProducts = [...products];

export default function EventDetailPage() {
  const [open, setOpen] = React.useState<boolean>(false);

  const onSubmit = (data: unknown) => {
    // eslint-disable-next-line no-console
    console.log(data);

    toast.promise(
      simulateGet(2000).then(() => {
        setOpen(false);
      }),
      {
        ...defaultToastMessage,
        success: 'Successfully posted!',
      }
    );

    return;
  };

  return (
    <Layout>
      <Seo templateTitle='Event Detail' />

      <PhotoFormModal open={open} setOpen={setOpen} onSubmit={onSubmit} />

      <main className='layout pt-14 sm:pt-16'>
        {/* Product */}
        <div className='lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16'>
          {/* Product image */}
          <div className='lg:row-end-1 lg:col-span-4'>
            <div className='overflow-hidden bg-gray-100 rounded-lg aspect-w-4 aspect-h-3'>
              <img
                src={product.imageSrc}
                alt={product.name}
                className='object-cover object-center'
              />
            </div>
          </div>

          {/* Product details */}
          <div className='max-w-2xl mx-auto mt-14 sm:mt-16 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-3'>
            <div className='flex flex-col-reverse'>
              <div className='mt-4'>
                <h1 className='text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl'>
                  {product.name}
                </h1>

                <h2 id='information-heading' className='sr-only'>
                  Product information
                </h2>
              </div>
            </div>

            <p className='mt-6 text-gray-500'>{product.description}</p>

            <div className='mt-6 space-y-3'>
              <div className='flex items-center'>
                <div className='p-2 rounded-full bg-primary-100'>
                  <HiOutlineUser className='text-gray-900' />
                </div>
                <p className='ml-3 text-sm text-gray-500'>
                  Greenpeace Indonesia
                </p>
              </div>
              <div className='flex items-center'>
                <div className='p-2 rounded-full bg-primary-100'>
                  <HiOutlineCalendar className='text-gray-900' />
                </div>
                <p className='ml-3 text-sm text-gray-500'>
                  November 22, 2021, 09:00 AM
                </p>
              </div>

              <div className='flex items-center'>
                <div className='p-2 rounded-full bg-primary-100'>
                  <HiOutlineLocationMarker className='text-gray-900' />
                </div>
                <p className='ml-3 text-sm text-gray-500'>Bali</p>
              </div>
            </div>

            <div className='grid grid-cols-1 mt-10 gap-x-6 gap-y-4 sm:grid-cols-2'>
              <Button variant='primary'>Join</Button>
              <Button onClick={() => setOpen(true)} variant='primary'>
                Post Activity
              </Button>
            </div>
          </div>

          <div className='w-full max-w-2xl mx-auto mt-16 lg:max-w-none lg:mt-0 lg:col-span-4'>
            <Tab.Group as='div'>
              <div className='border-b border-gray-200'>
                <Tab.List className='flex -mb-px space-x-8'>
                  <Tab
                    className={({ selected }) =>
                      clsx(
                        selected
                          ? 'border-primary-600 text-primary-600'
                          : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300',
                        'whitespace-nowrap py-6 border-b-2 font-medium text-sm'
                      )
                    }
                  >
                    Posts
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      clsx(
                        selected
                          ? 'border-primary-600 text-primary-600'
                          : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300',
                        'whitespace-nowrap py-6 border-b-2 font-medium text-sm'
                      )
                    }
                  >
                    FAQ
                  </Tab>
                </Tab.List>
              </div>
              <Tab.Panels as={React.Fragment}>
                <Tab.Panel className='-mb-10'>
                  <h3 className='sr-only'>Posts</h3>

                  <div>
                    {reviews.featured.map((review, reviewIdx) => (
                      <div
                        key={review.id}
                        className={clsx(
                          reviewIdx === 0 && 'mt-4',
                          'flex p-4 space-x-4 text-sm text-gray-500'
                        )}
                      >
                        <img
                          src={review.avatarSrc}
                          alt=''
                          className='w-10 h-10 bg-gray-100 rounded-full'
                        />
                        <div className='flex-1 space-y-1'>
                          <h3 className='text-sm text-gray-900'>
                            {review.author}
                          </h3>
                          <p>Let&apos;s go🔥🔥 #SeasForUs</p>
                          <div className='overflow-hidden bg-gray-100 rounded-lg aspect-w-5 aspect-h-3'>
                            <NextImage
                              src={product.imageSrc}
                              alt={product.name}
                              className='object-cover object-center w-full h-full sm:w-full sm:h-full'
                              width='1200'
                              height='720'
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Tab.Panel>

                <Tab.Panel as='dl' className='text-sm text-gray-500'>
                  <h3 className='sr-only'>Frequently Asked Questions</h3>

                  {faqs.map((faq) => (
                    <React.Fragment key={faq.question}>
                      <dt className='mt-10 font-medium text-gray-900'>
                        {faq.question}
                      </dt>
                      <dd className='mt-2 prose-sm prose text-gray-500 max-w-none'>
                        <p>{faq.answer}</p>
                      </dd>
                    </React.Fragment>
                  ))}
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>

        {/* Related products */}
        <div className='max-w-2xl mx-auto mt-24 sm:mt-32 lg:max-w-none'>
          <div className='flex items-center justify-between space-x-4'>
            <h2 className='text-lg font-medium text-gray-900'>
              Other <Accent>#SeasForUs</Accent> events
            </h2>
            <UnstyledLink
              href='/events'
              className='text-sm font-medium text-primary-600 whitespace-nowrap hover:text-primary-500'
            >
              View all<span aria-hidden='true'> &rarr;</span>
            </UnstyledLink>
          </div>
          <div className='grid grid-cols-1 mt-6 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4'>
            {relatedProducts.map((product) => (
              <EventCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
