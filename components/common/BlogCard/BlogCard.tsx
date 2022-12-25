import React from 'react';
import { Card, Image } from '@mantine/core';

import { IBlog } from 'data/interfaces/IBlog';

const BlogCard = ({ title, subTitle, coverImg, hashtags }: IBlog) => {
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder className="hover:shadow-md cursor-pointer w-[33%] ">
      <Card.Section>
        <Image src={coverImg} height={256} alt="Norway" />
      </Card.Section>
      <div className="px-[6px] pt-[24px] pb-[16px] text-left">
        <h3 className="font-heading text-[24px] leading-[36px] text-black">{title}</h3>
        <span className=" text-palette-3 text-[16px] leading-[28px]  ">{subTitle}</span>
      </div>
    </Card>
  );
};

export default BlogCard;
