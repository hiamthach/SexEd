import React from 'react';
import Logo from 'components/common/Logo/Logo';
import Link from 'next/link';
import { Input } from '@mantine/core';
import { HiOutlineMail } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className=" bg-[#FAFAFB]">
      <main className="max-w-[1164px] mx-auto flex flex-col sm:flex-row items-center sm:items-start justify-between gap-[24px] py-[54px]">
        <Logo />
        <div className="flex flex-col gap-[6px] text-center sm:text-left">
          <h3 className="text-[20px] font-[600] mb-[6px] leading-[1]">Khám phá</h3>
          <Link href={'/blog'} className="text-palette-2 text-[14px] font-[500] hover:underline no-underline active:text-palette-3">
            Bài viết
          </Link>
          <Link href={'/test'} className="text-palette-2 text-[14px] font-[500] hover:underline no-underline active:text-palette-3">
            Trắc nghiệm
          </Link>
        </div>
        <div className="flex flex-col gap-[6px] text-center sm:text-left">
          <h3 className="text-[20px] font-[600] mb-[6px] leading-[1]">Về chúng tôi</h3>
          <Link href={'/'} className="text-palette-2 text-[14px] font-[500] hover:underline no-underline active:text-palette-3">
            Liên hệ
          </Link>
        </div>
        <div className="">
          <h3 className=" text-palette-2">Nhận những tin tức mới nhất</h3>
          <Input icon={<HiOutlineMail />} placeholder="Your email" />
        </div>
      </main>
    </footer>
  );
};
export default Footer;
