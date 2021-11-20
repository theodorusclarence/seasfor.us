import * as React from 'react';

import axiosClient from '@/lib/axios';

import useAuthStore from '@/store/useAuthStore';

import Footer from './Footer';
import Nav from './Nav';
import PrivateRoute from '../PrivateRoute';

export default function Layout({ children }: { children: React.ReactNode }) {
  const protectedRoutes = ['/myevents'];
  const [open, setOpen] = React.useState(false);

  //#region  //*=========== STORE ===========
  const login = useAuthStore.useLogin();
  const stopLoading = useAuthStore.useStopLoading();
  //#endregion  //*======== STORE ===========

  React.useEffect(() => {
    const loadUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token === null || token === undefined) {
          return;
        }

        const res = await axiosClient.get('/user/get-user-info');

        login(res.data.data);
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
  }, []);

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
