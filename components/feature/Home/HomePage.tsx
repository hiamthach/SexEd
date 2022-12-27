import React from 'react';

import Image from 'next/image';

import Layout from '../../layout/Layout';
import Container from 'components/layout/Container';
import HomeSlogan from './components/HomeSlogan';
import HomeCard from './components/HomeCard';

export default function HomePage() {
  return (
    <Layout seoTitle="SXus" title="Trang cung cấp thông tin và trắc nghiệm về giáo dục giới tính toàn diện">
      <Image src={'/images/wallpaper.jpg'} width={1000} height={500} alt="background" className="w-full h-[100vh] object-cover object-center relative" property="" />
      <Container>
        <HomeSlogan />
        <HomeCard />
      </Container>
    </Layout>
  );
}
