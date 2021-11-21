/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';
import * as React from 'react';
import { FaMedal } from 'react-icons/fa';
import { ImSpinner8 } from 'react-icons/im';
import useSWR from 'swr';

import useWithToast from '@/hooks/toast/useWithToast';

import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

import { LeaderboardApi } from '@/types/api';

export default function LeaderboardPage() {
  const { data: leaderboardData, isLoading } = useWithToast(
    useSWR<LeaderboardApi>('/leaderboard'),
    {
      loading: 'Getting leaderboard data',
      success: 'Leaderboard fetched successfully',
    }
  );

  return (
    <Layout>
      <Seo templateTitle='Leaderboard' />

      <main>
        <section>
          <div className='flex flex-col items-center pt-14 sm:pt-16 layout min-h-main'>
            <div className='text-center'>
              <h1 className='text-4xl font-extrabold tracking-tight text-gray-900'>
                Leaderboard
              </h1>
            </div>

            <div className='flex flex-col w-full max-w-4xl mt-8'>
              {isLoading ? (
                <div className='flex flex-col items-center min-h-screen text-gray-800'>
                  <ImSpinner8 className='mb-4 text-4xl animate-spin' />
                  <p>Loading...</p>
                </div>
              ) : (
                <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
                  <div className='overflow-hidden border-b border-gray-200 shadow sm:rounded-lg'>
                    <table className='min-w-full divide-y divide-gray-200'>
                      <colgroup>
                        <col span={1} style={{ width: '5%' }} />
                        <col span={1} style={{ width: '65%' }} />
                        <col span={1} style={{ width: '30%' }} />
                      </colgroup>
                      <thead className='bg-gray-100'>
                        <tr>
                          <th
                            scope='col'
                            className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'
                          >
                            No
                          </th>
                          <th
                            scope='col'
                            className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'
                          >
                            Name
                          </th>
                          <th
                            scope='col'
                            className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'
                          >
                            Events Followed
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {leaderboardData?.data?.map((person, personIdx) => (
                          <tr
                            key={personIdx}
                            className={clsx(
                              personIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                            )}
                          >
                            <td className='px-6 py-4 text-sm text-gray-700 whitespace-nowrap'>
                              {personIdx === 0 ? (
                                <FaMedal className='text-xl text-[#FFD700]' />
                              ) : personIdx === 1 ? (
                                <FaMedal className='text-xl text-[#C0C0C0]' />
                              ) : personIdx === 2 ? (
                                <FaMedal className='text-xl text-[#CD7F32]' />
                              ) : (
                                personIdx + 1
                              )}
                            </td>
                            <td className='flex items-center px-6 py-4 text-sm text-gray-900 whitespace-nowrap'>
                              <div className='w-8 h-8 overflow-hidden rounded-full'>
                                <NextImage
                                  src={person.link_avatar}
                                  alt={person.name}
                                  className='w-full h-full '
                                  width={96}
                                  height={96}
                                />
                              </div>
                              <p className='ml-2'>{person.name}</p>
                            </td>
                            <td className='px-6 py-4 text-sm text-gray-900 whitespace-nowrap'>
                              {person.point}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
