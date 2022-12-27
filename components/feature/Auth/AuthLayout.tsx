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

      <div className="w-[964px] max-w-[90%] h-[600px] bg-white rounded-[12px] overflow-hidden flex">{children}</div>
    </div>
  );
};

export default AuthLayout;
