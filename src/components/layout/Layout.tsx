import { useRouter } from 'next/router';
import * as React from 'react';

import axiosClient from '@/lib/axios';

import useAuthStore from '@/store/useAuthStore';

import Footer from './Footer';
import Nav from './Nav';
import PrivateRoute from '../PrivateRoute';

import { AuthApi } from '@/types/api';

export default function Layout({ children }: { children: React.ReactNode }) {
  //#region  //*=========== COMMONS ===========
  const protectedRoutes = ['/myevents'];
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const { query, pathname } = router;
  //#endregion  //*======== COMMONS ===========

  //#region  //*=========== STORE ===========
  const login = useAuthStore.useLogin();
  const stopLoading = useAuthStore.useStopLoading();
  //#endregion  //*======== STORE ===========

  React.useEffect(() => {
    const loadUser = async () => {
      try {
        const token = query.token || localStorage.getItem('token');

        if (token === null || token === undefined) {
          return;
        }

        if (query.token) {
          router.replace(pathname, undefined, { shallow: true });
        }

        const res = await axiosClient.get<AuthApi>(
          'https://api.seasfor.us/api/auth0-endpoints/info'
        );

        login({
          id: res.data.data.id,
          name: res.data.data.name,
          photo: res.data.data.photo,
          token: token + '',
        });
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error('error context', err);
        localStorage.removeItem('token');
      } finally {
        stopLoading();
      }
    };

    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <PrivateRoute protectedRoutes={protectedRoutes}>
      <div className='bg-white'>
        {/* Mobile menu */}
        <Nav.Mobile open={open} setOpen={setOpen} />

        <header className='sticky top-0 z-10 bg-white'>
          <Nav.Desktop open={open} setOpen={setOpen} />
        </header>
        {children}
        <Footer />
      </div>
    </PrivateRoute>
  );
}
