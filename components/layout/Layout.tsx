import React from 'react';

import SEOHead from '../common/SEOHead/SEOHead';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  seoTitle?: string;
  title?: string;
  // headerBanner: HTMLVideoElement | HTMLImageElement;
  children: JSX.Element | JSX.Element[];
}

const Layout = (props: LayoutProps) => {
  return (
    <main className="w-full">
      <SEOHead seoTitle={props.seoTitle} />
      <Header />
      {props.children}
      <Footer />
    </main>
  );
};

export default Layout;
