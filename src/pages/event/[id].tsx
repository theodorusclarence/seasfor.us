/* eslint-disable @next/next/no-img-element */
import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import * as React from 'react';
import toast from 'react-hot-toast';
import {
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineUser,
} from 'react-icons/hi';
import useSWR from 'swr';

import { parseEventsData } from '@/lib/api';
import axiosClient from '@/lib/axios';
import { formatDateCardEvents } from '@/lib/date';
import { simulateGet } from '@/lib/helper';
import useLoadingToast from '@/hooks/toast/useLoadingToast';

import Accent from '@/components/Accent';
import Button from '@/components/buttons/Button';
import EventCard from '@/components/events/EventCard';
import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import PhotoFormModal from '@/container/PhotoFormModal';

import { loginUrl } from '@/constant/api';
import { defaultToastMessage } from '@/constant/toast';
import useAuthStore from '@/store/useAuthStore';

import { EventsApi } from '@/types/api';

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
    question: 'What should I bring to the event?',
    answer:
      "You should bring your own equipment such as gloves, shovel, and don't forget to bring your tumbler. The trash bags will be provided by us.",
  },
  {
    question: 'What should I post on the Post Activity button?',
    answer:
      'You are encouraged to take your best picture when you are cleaning up the beach. Participants with valid picture will gain 1 point on the Leaderboard.',
  },
  // More FAQs...
];

export default function EventDetailPage() {
  const [open, setOpen] = React.useState<boolean>(false);

  const isAuthenticated = useAuthStore.useIsAuthenticated();

  const router = useRouter();
  const { id } = router.query;

  const { data: productsData } = useSWR<EventsApi>('/events');
  const mappedProducts = parseEventsData(productsData);
  const relatedProducts = mappedProducts
    .filter((event) => event.id === Number(id))
    .slice(1, 4);

  const product = mappedProducts.find((event) => event.id === Number(id));
  const { date, time } = formatDateCardEvents(product?.date || new Date());

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

  //#region  //*=========== Join Event ===========
  const isLoading = useLoadingToast();
  const handleJoin = () => {
    toast.promise(
      axiosClient.post('/events/participate', {
        id_event: id,
        is_event_organizer: 0,
      }),
      {
        ...defaultToastMessage,
        loading: 'Adding you as a volunteer..',
        success: "You've successfully joined the event!",
      }
    );
  };
  //#endregion  //*======== Join Event ===========

  return (
    <Layout>
      <Seo templateTitle='Event Detail' />

      <PhotoFormModal open={open} setOpen={setOpen} onSubmit={onSubmit} />

      <main className='layout pt-14 sm:pt-16'>
        {/* Product */}
        <div className='lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16'>
          {/* Product image */}
          <div className='lg:row-end-1 lg:col-span-4'>
            <div className='overflow-hidden bg-gray-100 rounded-lg aspect-w-5 aspect-h-3'>
              {product ? (
                <NextImage
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className='object-cover object-center w-full h-full sm:w-full sm:h-full'
                  width='1200'
                  height='720'
                />
              ) : (
                <div className='bg-gray-400 rounded animate-pulse' />
              )}
            </div>
          </div>

          {/* Product details */}
          <div className='w-full max-w-2xl mx-auto mt-14 sm:mt-16 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-3'>
            <div className='flex flex-col-reverse'>
              <div className='mt-4'>
                {product ? (
                  <h1 className='text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl'>
                    {product?.name}
                  </h1>
                ) : (
                  <div className='bg-gray-400 w-1/2 h-[36px] rounded animate-pulse' />
                )}

                <h2 id='information-heading' className='sr-only'>
                  Product information
                </h2>
              </div>
            </div>

            <div className='mt-6 space-y-2'>
              {product ? (
                <p className='text-gray-500'>{product.description}</p>
              ) : (
                <>
                  <div className='bg-gray-400 w-full h-[16px] rounded animate-pulse' />
                  <div className='bg-gray-400 w-1/2 h-[16px] rounded animate-pulse' />
                </>
              )}
            </div>

            <div className='mt-6 space-y-3'>
              {product ? (
                <>
                  <div className='flex items-center'>
                    <div className='p-2 rounded-full bg-primary-100'>
                      <HiOutlineUser className='text-gray-900' />
                    </div>
                    <p className='ml-3 text-sm text-gray-500'>
                      {product.participants} participants
                    </p>
                  </div>
                  <div className='flex items-center'>
                    <div className='p-2 rounded-full bg-primary-100'>
                      <HiOutlineCalendar className='text-gray-900' />
                    </div>
                    <p className='ml-3 text-sm text-gray-500'>
                      {date}, {time}
                    </p>
                  </div>

                  <div className='flex items-center'>
                    <div className='p-2 rounded-full bg-primary-100'>
                      <HiOutlineLocationMarker className='text-gray-900' />
                    </div>
                    <p className='ml-3 text-sm text-gray-500'>{product.city}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className='bg-gray-400 w-3/4 h-[16px] rounded animate-pulse' />
                  <div className='bg-gray-400 w-3/4 h-[16px] rounded animate-pulse' />
                  <div className='bg-gray-400 w-3/4 h-[16px] rounded animate-pulse' />
                </>
              )}
            </div>

            <div className='grid grid-cols-1 mt-10 gap-x-6 gap-y-4 sm:grid-cols-2'>
              {isAuthenticated ? (
                <>
                  <Button
                    variant='primary'
                    onClick={handleJoin}
                    isLoading={isLoading}
                  >
                    Join
                  </Button>
                  <Button onClick={() => setOpen(true)} variant='primary'>
                    Post Activity
                  </Button>
                </>
              ) : (
                <ButtonLink
                  href={loginUrl}
                  openNewTab={false}
                  variant='primary'
                  className='text-center'
                >
                  Sign in to join
                </ButtonLink>
              )}
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
                          <div className='!mt-2 overflow-hidden bg-gray-100 rounded-lg aspect-w-5 aspect-h-3'>
                            {/* <NextImage
                              src={product?.imageSrc}
                              alt={product?.imageAlt}
                              className='object-cover object-center w-full h-full sm:w-full sm:h-full'
                              width='1200'
                              height='720'
                            /> */}
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
