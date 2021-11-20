import * as React from 'react';
import {
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineLocationMarker,
} from 'react-icons/hi';

import { formatDateCardEvents } from '@/lib/date';

import { Product } from '@/data/products';

import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';

type EventCardProps = {
  product: Product;
};

export default function EventCard({ product }: EventCardProps) {
  const { date, time } = formatDateCardEvents(product.date);
  return (
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
        <div className='flex items-center justify-between'>
          <h3 className='text-base font-medium text-gray-900'>
            <UnstyledLink href={`/event/${product.id}`}>
              <span aria-hidden='true' className='absolute inset-0' />
              {product.name}
            </UnstyledLink>
          </h3>
          <p className='text-sm font-medium text-gray-700'>
            {product.participants} Participants
          </p>
        </div>
        <p className='h-full text-sm text-gray-500'>{product.description}</p>
        <div className='flex items-center gap-3 text-sm text-gray-600'>
          <div className='flex items-center gap-2'>
            <HiOutlineCalendar className='text-gray-700' />
            <p>{date}</p>
          </div>
          <div className='flex items-center gap-2'>
            <HiOutlineClock className='text-gray-700' />
            <p>{time}</p>
          </div>
        </div>
        <div className='flex items-center gap-2 text-sm text-gray-600'>
          <HiOutlineLocationMarker className='text-gray-700' />
          <p>{product.city}</p>
        </div>
      </div>
    </div>
  );
}
