import React from 'react';
import { useRouter } from 'next/router';
import { Card, Image } from '@mantine/core';

import { IBlog } from 'data/interfaces/IBlog';

const BlogCard = ({ title, subTitle, coverImg, hashtags, id }: IBlog) => {
  const router = useRouter();

  return (
    <Card shadow="sm" p="lg" radius="lg" withBorder className="hover:shadow-md cursor-pointer w-[33%]" onClick={() => router.push(`/blog/${id}`)}>
      <Card.Section>
        <Image src={coverImg} height={256} alt="Norway" />
      </Card.Section>
      <div className="px-[6px] pt-[24px] pb-[16px] text-left flex flex-col gap-1 justify-end">
        <h3 className="font-heading text-[20px] leading-[24px] text-[#171A1FFF] line-clamp-2" title={title}>
          {title}
        </h3>
        <span className="text-palette-3 text-[16px] leading-[24px] line-clamp-1" title={subTitle}>
          {subTitle}
        </span>
      </div>
    </Card>
  );
};

export default BlogCard;
