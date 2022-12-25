import React from 'react';
import { Carousel } from '@mantine/carousel';

import Image from 'next/image';
import { IBlogList } from 'data/interfaces/IBlog';

import dateHelper from 'helpers/dateHelpers';

interface IBlogCarousel {
  blogList: IBlogList;
}

const BlogCarousel = ({ blogList }: IBlogCarousel) => {
  const renderBlogSlide = () => {
    return blogList.map((blog) => {
      return (
        <Carousel.Slide key={blog.id} className="overflow-hidden">
          <div className="relative w-full h-full overflow-hidden ">
            <div className="absolute left-[40px] bottom-[40px] z-[20] w-[40%]">
              <h4 className=" text-white text-[20px] leading-[28px] font-[600]">{blog.subTitle}</h4>
              <h2 className="text-white font-heading text-[36px] leading-[42px] mb-[12px] ">{blog.title}</h2>
              <h6 className="text-white text-[16px] font-[400] ">{dateHelper.format(blog.createdDate)}</h6>
            </div>
            <div className="overlay bg-black opacity-[0.2] z-[10] absolute left-0 top-0 right-0 w-full h-full rounded-xl"></div>
            <Image src={blog.coverImg} alt={blog.title} fill className="object-center object-cover rounded-xl" />
          </div>
        </Carousel.Slide>
      );
    });
  };

  return (
    <Carousel sx={{ width: '100%' }} mx="auto" withIndicators height={560}>
      {blogList && renderBlogSlide()}
    </Carousel>
  );
};

export default BlogCarousel;
