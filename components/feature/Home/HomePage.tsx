import React from 'react';

import Image from 'next/image';

import Layout from '../../layout/Layout';
import Container from 'components/layout/Container';
import HomeSlogan from './components/HomeSlogan';
import HomeCard from './components/HomeCard';

export default function HomePage() {
  return (
    <Layout seoTitle="SXus" title="Trang cung cấp thông tin và trắc nghiệm về giáo dục giới tính toàn diện">
      <Container>
        <Image src={'/images/wallpaper.jpg'} width={1000} height={500} alt="background" className="w-full h-auto relative" property="" />
        <HomeSlogan />
        <HomeCard />
      </Container>
    </Layout>
  );
}
