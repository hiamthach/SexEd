import React from 'react';

import SEOHead from '../common/SEOHead/SEOHead';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  seoTitle?: string;
  title: string;
  // headerBanner: HTMLVideoElement | HTMLImageElement;
  children: JSX.Element;
}

const Layout = (props: LayoutProps) => {
  return (
    <main className=" max-w-[1080px] mx-auto mt-[50px] mb-0">
      <SEOHead seoTitle={props.seoTitle} />
      <Header title={props.title} />
      {props.children}
      <Footer />
    </main>
  );
};

export default Layout;
