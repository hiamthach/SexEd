import React from 'react';
import BlogCard from 'components/common/BlogCard/BlogCard';
import CusBtn from 'components/common/CusBtn/CusBtn';

import { IBlogList } from 'data/interfaces/IBlog';

interface IBlogContent {
  blogList: IBlogList;
}

const BlogContent = ({ blogList }: IBlogContent) => {
  const renderBlogs = () => {
    return blogList.map((blog) => <BlogCard key={blog.id} {...blog} />);
  };

  return (
    <div className="text-center py-[130px]">
      <div className="flex justify-between gap-[30px] mb-[32px]">{blogList && renderBlogs()}</div>
      <CusBtn content="Xem thêm"></CusBtn>
    </div>
  );
};

export default BlogContent;
