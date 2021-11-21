import { useRouter } from 'next/router';
import * as React from 'react';

import useAuthStore from '@/store/useAuthStore';

import Footer from './Footer';
import Nav from './Nav';
import PrivateRoute from '../PrivateRoute';

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

        // TODO: get user detail
        // const res = await axiosClient.get('/user/get-user-info');

        login({
          id: '1',
          name: 'Rizqi',
          photo:
            'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
          token:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJwcGRic3Vtc2VsIiwiaWF0IjoxNjM3NDY1NjAwLCJuYmYiOjE2Mzc0NjU2MDAsImV4cCI6MTYzODA3MDQwMCwic3ViIjoyfQ.jDLfPEX4cjTkyz_dKAGM3NBoSYinV6rAfThncc8bHM4',
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
