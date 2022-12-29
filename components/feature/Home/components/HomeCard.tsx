import React from 'react';

import { useRouter } from 'next/router';

import BlogCard from 'components/common/BlogCard/BlogCard';
import CusBtn from 'components/common/CusBtn/CusBtn';

import { Grid } from '@mantine/core';

import blogsData from 'data/blogs';

const HomeCard = () => {
  const router = useRouter();

  const renderBlogs = () => {
    return blogsData.slice(0, 3).map((blog) => (
      <Grid.Col span={12} sm={6} md={4} key={blog.id}>
        <BlogCard {...blog} />
      </Grid.Col>
    ));
  };

  return (
    <div className="text-center mt-[30px] mb-[120px] ">
      <h1 className="font-heading text-[48px] mb-[12px] leading-[64px] font-[900] ">Nổi bật</h1>
      <p className="max-w-[590px] break-words text-[17px] m-auto text-[#9095A1FF] mb-[56px]">Cập nhật nhanh những bài viết "hot hit" trong tuần qua</p>

      <Grid gutter={5} gutterXs="md" gutterMd="xl" gutterXl={50} className="mb-6">
        {blogsData && renderBlogs()}
      </Grid>
      <CusBtn content="Xem thêm" onClick={() => router.push('/blog')}></CusBtn>
    </div>
  );
};

export default HomeCard;
