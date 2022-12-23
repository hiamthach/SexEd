import React from 'react';

import Image from 'next/image';

import Layout from '../../layout/Layout';
import HomeSlogan from './components/HomeSlogan';
import HomeCard from './components/HomeCard';

export default function HomePage() {
  return (
    <Layout seoTitle="SXus" title="Trang cung cấp thông tin và trắc nghiệm về giáo dục giới tính toàn diện">
      {/* <Image src={'/images/img-1.png'} alt="banner" width={1164} height={1164} className="w-full h-auto" /> */}
      <div className="min-h-[90vh] max-w-[1164px] m-auto">
        <HomeSlogan />
        <HomeCard />
      </div>
    </Layout>
  );
}
