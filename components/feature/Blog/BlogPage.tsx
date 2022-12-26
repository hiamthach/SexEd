import React from 'react';

import Layout from 'components/layout/Layout';
import Container from 'components/layout/Container';
import BlogCarousel from './components/BlogCarousel';
import BlogContent from './components/BlogContent';

import { IBlogList } from 'data/interfaces/IBlog';

interface IBlogPageProps {
  blogList: IBlogList;
}

const BlogPage = ({ blogList }: IBlogPageProps) => {
  return (
    <Layout seoTitle="SXus | Blog">
      <Container>
        <BlogCarousel blogList={blogList.slice(0, 3)} />
        <BlogContent blogList={blogList} />
      </Container>
    </Layout>
  );
};

export default BlogPage;
