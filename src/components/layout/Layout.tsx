import * as React from 'react';

import Footer from './Footer';
import Nav from './Nav';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className='bg-white'>
      {/* Mobile menu */}
      <Nav.Mobile open={open} setOpen={setOpen} />

      <header className='sticky top-0 z-10 bg-white'>
        <Nav.Desktop open={open} setOpen={setOpen} />
      </header>
      {children}
      <Footer />
    </div>
  );
}
