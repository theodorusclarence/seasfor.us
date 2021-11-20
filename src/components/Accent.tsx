import clsx from 'clsx';
import * as React from 'react';

export default function Accent({
  children,
  className,
  ...rest
}: React.ComponentPropsWithoutRef<'span'>) {
  return (
    <span
      className={clsx(
        'font-bold text-transparent bg-gradient-to-tr from-primary-500 to-primary-700 bg-clip-text',
        className
      )}
      {...rest}
    >
      {children}
    </span>
  );
}
