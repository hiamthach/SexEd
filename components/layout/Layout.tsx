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
    <main className="w-full">
      <div className="max-w-[1164px] mx-auto mb-0">
        <SEOHead seoTitle={props.seoTitle} />
        <Header title={props.title} />
        {props.children}
        <Footer />
      </div>
    </main>
  );
};

export default Layout;
