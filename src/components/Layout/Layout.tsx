import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import LayoutProvider from './helpers/context';
import Overlay from './helpers/overlay';
import SideNav from './Sidebar';

type LayoutProps = {
  children: JSX.Element;
};

export function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <LayoutProvider>
      <div className="flex font-body items-start">
        <Overlay />
        <Header />
        <div className="lg:hidden">
          <SideNav />
        </div>
        <div className="flex flex-col pl-0 w-full">
          <main className="pt-24 pb-1 md:px-4 lg:px-6 lg:pl-2">{children}</main>
          <Footer />
        </div>
      </div>
    </LayoutProvider>
  );
}
