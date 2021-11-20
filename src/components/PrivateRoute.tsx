import { useRouter } from 'next/router';
import * as React from 'react';
import { ImSpinner8 } from 'react-icons/im';

import useAuthStore from '@/store/useAuthStore';

type PrivateRouteProps = {
  protectedRoutes: string[];
  children: JSX.Element;
};

export default function PrivateRoute({
  protectedRoutes,
  children,
}: PrivateRouteProps) {
  const router = useRouter();

  //#region  //*=========== STORE ===========
  const isAuthenticated = useAuthStore.useIsAuthenticated();
  const isLoading = useAuthStore.useIsLoading();
  //#endregion  //*======== STORE ===========

  const isProtected = protectedRoutes.indexOf(router.pathname) !== -1;

  React.useEffect(() => {
    if (!isLoading && !isAuthenticated && isProtected) {
      router.push('/signin');
    }
  }, [isLoading, isAuthenticated, isProtected, router]);

  if ((isLoading || !isAuthenticated) && isProtected) {
    return (
      <div className='flex flex-col items-center justify-center min-h-screen text-gray-800'>
        <ImSpinner8 className='mb-4 text-4xl animate-spin' />
        <p>Loading...</p>
      </div>
    );
  }

  return children;
}
