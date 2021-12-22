import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';

type LayoutProps = {
  children: JSX.Element;
};

export function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div>
      <Header />
      <div className="container min-h-screen">{children}</div>
      <Footer />
    </div>
  );
}
