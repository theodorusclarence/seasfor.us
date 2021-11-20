import { AppProps } from 'next/app';

import '@/styles/globals.css';

import DismissableToast from '@/components/DismissableToast';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DismissableToast />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
