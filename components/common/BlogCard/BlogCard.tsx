import React from 'react';
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

const BlogCard = () => {
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder className="hover:shadow-md cursor-pointer">
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={256}
          alt="Norway"
        />
      </Card.Section>
      <div className="px-[6px] pt-[24px] pb-[16px] text-left">
        <span className=" text-palette-3 text-[16px] leading-[28px]">#hashtag</span>
        <h3 className="font-heading text-[24px] leading-[36px] text-black">Blog title</h3>
      </div>
    </Card>
  );
};

export default BlogCard;
