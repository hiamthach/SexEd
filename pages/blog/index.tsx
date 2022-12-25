import React from 'react';
import BlogPage from 'components/feature/Blog/BlogPage';
import { IBlogList } from 'data/interfaces/IBlog';

interface IBlogProps {
  data: IBlogList;
}

const Blog = ({ data }: IBlogProps) => {
  return <BlogPage blogList={data} />;
};

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/blogs');
  const data = await res.json();

  return {
    props: { data },
  };
}

export default Blog;
