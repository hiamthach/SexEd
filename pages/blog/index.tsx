import React from 'react';
import BlogPage from 'components/feature/Blog/BlogPage';
import blogsData from 'data/blogs';

const Blog = () => {
  return <BlogPage blogList={blogsData} />;
};

export default Blog;
