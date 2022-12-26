import React from 'react';

import { useRouter } from 'next/router';

import BlogCard from 'components/common/BlogCard/BlogCard';
import CusBtn from 'components/common/CusBtn/CusBtn';

import blogsData from 'data/blogs';

const HomeCard = () => {
  const router = useRouter();

  const renderBlogs = () => {
    return blogsData.slice(0, 3).map((blog) => <BlogCard key={blog.id} {...blog} />);
  };

  return (
    <div className="text-center mt-[30px] mb-[120px] ">
      <h1 className="font-heading text-[48px] mb-[14px] leading-[68px]">Nổi bật</h1>
      <p className="max-w-[590px] break-words text-[18px] m-auto text-[#9095A1FF] mb-[72px]">
        Do consectetur proident proident id eiusmod deserunt consequat pariatur ad ex velit do Lorem reprehenderit.
      </p>

      <div className="flex justify-between gap-[30px] mb-[32px]">{renderBlogs()}</div>
      <CusBtn content="Xem thêm" onClick={() => router.push('/blog')}></CusBtn>
    </div>
  );
};

export default HomeCard;
