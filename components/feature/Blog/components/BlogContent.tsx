import React from 'react';
import BlogCard from 'components/common/BlogCard/BlogCard';
import CusBtn from 'components/common/CusBtn/CusBtn';

import { Grid } from '@mantine/core';

import { IBlogList } from 'data/interfaces/IBlog';

interface IBlogContent {
  blogList: IBlogList;
}

const BlogContent = ({ blogList }: IBlogContent) => {
  const renderBlogs = () => {
    return blogList.map((blog) => (
      <Grid.Col span={12} sm={6} md={4}>
        <BlogCard key={blog.id} {...blog} />
      </Grid.Col>
    ));
  };

  return (
    <div className="text-center py-[80px]">
      <Grid gutter={5} gutterXs="md" gutterMd="xl" gutterXl={50} className="mb-6">
        {blogList && renderBlogs()}
      </Grid>
      <CusBtn content="Xem thêm"></CusBtn>
    </div>
  );
};

export default BlogContent;
