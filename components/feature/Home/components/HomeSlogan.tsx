import React from 'react';

import { IconArticle } from '@tabler/icons';
import { useRouter } from 'next/router';

const HomeSlogan = () => {
  const router = useRouter();

  return (
    <div className="w-full py-[70px] flex gap-[82px]">
      <div className="w-[40%]">
        <h3 className="font-heading text-[32px] leading-[48px] text-palette-2 ">Slogan laboris cupidatat consequat</h3>
        <p className="text-[18px] mt-[16px] leading-[28px]">
          Voluptate excepteur fugiat excepteur consectetur elit deserunt anim sunt officia ipsum. Sit do magna dolore do cupidatat sit cupidatat aute sit velit excepteur nostrud et{' '}
        </p>
      </div>

      <div className="w-[60%] flex gap-[40px]">
        <div
          className="rounded-[36px] bg-light p-[32px] w-[50%] hover:shadow-lg cursor-pointer"
          onClick={() => {
            router.push('/blog');
          }}
        >
          <IconArticle className="text-palette-2" size={48} />
          <h3 className="font-heading text-palette-2 text-[24px] mb-4">Bài viết</h3>
          <p>Mollit ullamco laboris elit eiusmod aute adipisicing.</p>
        </div>
        <div
          className="rounded-[36px] bg-light p-[32px] w-[50%] hover:shadow-lg cursor-pointer"
          onClick={() => {
            router.push('/test');
          }}
        >
          <IconArticle className="text-palette-2" size={48} />
          <h3 className="font-heading text-palette-2 text-[24px] mb-4">Làm trắc nghiệm</h3>
          <p>Mollit ullamco laboris elit eiusmod aute adipisicing.</p>
        </div>
      </div>
    </div>
  );
};

export default HomeSlogan;
