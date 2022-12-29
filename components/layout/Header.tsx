import React, { useState } from 'react';
import Link from 'next/link';
import Logo from 'components/common/Logo/Logo';
import CusBtn from 'components/common/CusBtn/CusBtn';
import { FiSearch, FiMenu, FiUser } from 'react-icons/fi';
import { IoIosLogOut } from 'react-icons/io';
import { Drawer, Avatar, Menu } from '@mantine/core';
import AuthConsumer from 'hooks/useAuth';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const { currentUser, isAuth, signOut } = AuthConsumer();

  return (
    <header className="w-full shadow-[0px 0px 1px #171a1f] max-[400px]:px-0 sm:px-[24px] fixed top-0 left-0 right-0 z-[10] bg-white shadow-sm">
      <main className="mx-auto flex justify-between items-center  py-[14px] px-[12px] sm:px-[30px] lg:px-0">
        <div className="flex items-center gap-[48px]">
          <Logo />
          <ul className=" items-center gap-[24px] hidden sm:flex">
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
          <FiMenu
            size={24}
            className="text-palette-2 cursor-pointer sm:hidden"
            onClick={() => {
              setDrawerOpen(true);
            }}
          />
        </div>
        {isAuth && currentUser ? (
          <Menu shadow="md" width={200} trigger="hover">
            <Menu.Target>
              <Avatar radius="xl" className="cursor-pointer border border-palette-1">
                <FiUser size={20} className="text-palette-1" />
              </Avatar>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Label className="text-sm">{currentUser.email}</Menu.Label>
              <Menu.Item
                color="red"
                icon={<IoIosLogOut size={16} />}
                className="hover:bg-red-50 text-red-600"
                onClick={() => {
                  signOut();
                }}
              >
                Đăng xuất
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        ) : (
          <div className="flex items-center gap-2 sm:gap-[24px]">
            <FiSearch className="text-palette-2 text-[18px] cursor-pointer active:text-palette-5 hidden sm:block" />

            <Link href={'/auth/signin'} className="text-[14px] text-palette-2 no-underline hover:underline active:text-palette-3">
              Đăng nhập
            </Link>
            <Link href={'/auth/signup'}>
              <CusBtn content="Đăng ký"></CusBtn>
            </Link>
          </div>
        )}
      </main>
      <Drawer
        opened={drawerOpen}
        onClose={() => {
          setDrawerOpen(false);
        }}
      >
        <ul className=" flex-col items-center gap-4  w-full justify-center text-center">
          <li className="my-4">
            <Link href={'/blog'} className="text-[18px] text-palette-2 no-underline hover:underline active:text-palette-3">
              Bài Viết
            </Link>
          </li>
          <li className="my-4">
            <Link href={'/test'} className="text-[18px] text-palette-2 no-underline hover:underline active:text-palette-3">
              Trắc nghiệm
            </Link>
          </li>
          <li className="my-4">
            <Link href={'/'} className="text-[18px] text-palette-2 no-underline hover:underline active:text-palette-3">
              Liên hệ
            </Link>
          </li>
        </ul>
      </Drawer>
    </header>
  );
};

export default Header;
