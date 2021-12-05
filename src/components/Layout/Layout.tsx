import React from 'react';

type LayoutProps = {
  children: JSX.Element;
};

export function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div>
      <p>Header</p>
      {children}
      <p>Footer</p>
    </div>
  );
}
