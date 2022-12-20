import React from 'react';
import { useRouter } from 'next/router';

const Logo = ({ type = 'default' }: { type?: 'default' | 'white' }) => {
  const router = useRouter();

  return (
    <div
      className={`cursor-pointer font-body font-[900] text-[24px] text-palette-2 ${type === 'white' && 'text-white'}`}
      onClick={() => {
        router.push('/');
      }}
    >
      SXus
    </div>
  );
};

export default Logo;
