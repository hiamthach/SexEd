import Logo from 'components/common/Logo/Logo';
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface IAuthLayoutProps {
  children: JSX.Element | JSX.Element[];
}

const AuthLayout = ({ children }: IAuthLayoutProps) => {
  const { pathname } = useRouter();

  return (
    <div className="w-full min-h-screen bg-palette-1 relative flex items-center justify-center">
      <div className="absolute left-[36px] top-[28px]">
        <Logo type="white" />
      </div>
      <div className="absolute right-[36px] top-[28px] text-[14px] text-white flex">
        {pathname.includes('signin') && (
          <>
            <span>Bạn chưa có tài khoản? </span>
            <Link href="/auth/signup" className="text-white">
              Đăng ký
            </Link>
          </>
        )}
        {pathname.includes('signup') && (
          <>
            <span>Bạn đã có tài khoản? </span>
            <Link href="/auth/signin" className="text-white">
              Đăng nhập
            </Link>
          </>
        )}
      </div>
      <div className="w-[964px] max-w-[90%] h-[600px] bg-white rounded-[12px] overflow-hidden flex">{children}</div>
    </div>
  );
};

export default AuthLayout;
