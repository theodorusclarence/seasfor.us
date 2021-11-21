/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';
import * as React from 'react';

import NextImage from '@/components/NextImage';

import { Post } from '@/types/api';

type PostCardProps = {
  post: Post;
  className?: string;
};

export default function PostCard({ post, className }: PostCardProps) {
  return post.caption ? (
    <div
      key={post.id}
      className={clsx(className, 'flex p-4 space-x-4 text-sm text-gray-500')}
    >
      <div className='w-10 h-10 overflow-hidden rounded-full'>
        <NextImage
          src={post.user.link_avatar}
          alt={post.user.name}
          className='w-full h-full '
          width={256}
          height={256}
        />
      </div>
      <div className='flex-1 space-y-1'>
        <h3 className='text-sm text-gray-900'>{post.user.name}</h3>
        <p>{post.caption}</p>
        {post.link_photo && (
          <div className='!mt-2 overflow-hidden bg-gray-100 rounded-lg'>
            <img
              src={post.link_photo}
              alt={post.user.name}
              className='object-cover object-center w-full h-full sm:w-full sm:h-full'
              width='1200'
              height='720'
            />
          </div>
        )}
      </div>
    </div>
  ) : null;
}
