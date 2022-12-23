import React from 'react';

import BlogCard from 'components/common/BlogCard/BlogCard';
import CusBtn from 'components/common/CusBtn/CusBtn';

const HomeCard = () => {
  return (
    <div className="text-center mt-[30px] mb-[120px] ">
      <h1 className="font-heading text-[48px] mb-[14px] leading-[68px]">Nổi bật</h1>
      <p className="max-w-[590px] break-words text-[18px] m-auto text-[#9095A1FF] mb-[72px]">
        Do consectetur proident proident id eiusmod deserunt consequat pariatur ad ex velit do Lorem reprehenderit.
      </p>

      <div className="flex justify-between gap-[30px] mb-[32px]">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <CusBtn content="Xem thêm"></CusBtn>
    </div>
  );
};

export default HomeCard;
