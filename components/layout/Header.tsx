import React from 'react';
import Link from 'next/link';
import Logo from 'components/common/Logo/Logo';
import CusBtn from 'components/common/CusBtn/CusBtn';
import { FiSearch } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="w-full mb-[24px] shadow-[0px 0px 1px #171a1f] ">
      <main className="max-w-[1164px] mx-auto flex justify-between items-center py-[14px] px-[30px] lg:px-0">
        <div className="flex items-center gap-[48px]">
          <Logo />
          <ul className="flex items-center gap-[24px]">
            <li>
              <Link href={'/blog'} className="text-[14px] text-palette-2 no-underline hover:underline active:text-palette-3">
                Bài Viết
              </Link>
            </li>
            <li>
              <Link href={'/test'} className="text-[14px] text-palette-2 no-underline hover:underline active:text-palette-3">
                Trắc nghiệm
              </Link>
            </li>
            <li>
              <Link href={'/'} className="text-[14px] text-palette-2 no-underline hover:underline active:text-palette-3">
                Liên hệ
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-[24px]">
          <FiSearch className="text-palette-2 text-[18px] cursor-pointer active:text-palette-5" />

          <Link href={'/auth/signin'} className="text-[14px] text-palette-2 no-underline hover:underline active:text-palette-3">
            Đăng nhập
          </Link>
          <Link href={'/auth/signup'}>
            <CusBtn content="Đăng ký"></CusBtn>
          </Link>
        </div>
      </main>
    </header>
  );
};

export default Header;
