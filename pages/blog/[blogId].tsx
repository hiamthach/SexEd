import React from 'react';

import type { GetServerSidePropsContext } from 'next';
import Image from 'next/image';

import { IBlog } from 'data/interfaces/IBlog';

import Layout from 'components/layout/Layout';
import Container from 'components/layout/Container';
import HomeCard from 'components/feature/Home/components/HomeCard';

import dateHelper from 'helpers/dateHelpers';

const BlogId = ({ title, subTitle, id, createdDate, content, coverImg }: IBlog) => {
  return (
    <Layout seoTitle="SXus | Blog">
      <Container>
        <span className="text-[15px] font-heading font-[400] text-[#757575]">{dateHelper.format(createdDate)}</span>
        <h1 className="font-heading text-text-black font-[800] text-[36px]">{title}</h1>
        <h6 className="text-[18px] text-palette-1 font-[600] font-heading ">{subTitle}</h6>
        <Image src={coverImg} alt={title} width={1000} height={600} className="w-full h-auto max-h-[430px] object-cover object-center my-4 rounded-md" />
        <p className="text-[18px] text-text-body mb-[64px]">{content}</p>
        <HomeCard />
      </Container>
    </Layout>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const blogId = context.query.blogId;
  const res = await fetch(`http://localhost:3000/api/blogs/${blogId}`);
  const data = await res.json();

  return {
    props: data,
  };
}

export default BlogId;
