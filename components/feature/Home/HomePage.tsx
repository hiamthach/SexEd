import React from 'react';

import Image from 'next/image';

import Layout from '../../layout/Layout';
import HomeSlogan from './components/HomeSlogan';

export default function HomePage() {
  return (
    <Layout seoTitle="SXus" title="Trang cung cấp thông tin và trắc nghiệm về giáo dục giới tính toàn diện">
      <div className="min-h-[90vh] max-w-[1164px] m-auto">
        {/* <Image
          src={'https://cdn.dribbble.com/users/526796/screenshots/9936672/media/42ebf3a6b5e17341a551036b72a5f7c7.png?compress=1&resize=1000x750&vertical=top'}
          alt="banner"
          fill={true}
        /> */}
        <HomeSlogan />
      </div>
    </Layout>
  );
}
