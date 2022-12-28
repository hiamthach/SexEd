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
      <div className="sm:w-[964px] w-full sm:max-w-[90%] min-h-[600px] bg-white rounded-[12px] overflow-hidden flex relative">{children}</div>
    </div>
  );
};

export default AuthLayout;
