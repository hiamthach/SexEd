import React from 'react';

import { Button } from '@mantine/core';

import { FiChevronRight } from 'react-icons/fi';

import { ITest } from 'data/interfaces/ITest';

const TestCard = (props: ITest) => {
  const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className=" w-full sm:w-[48%] rounded-[32px] px-[36px] py-[32px] bg-[#E0BBE466] mb-[36px] flex flex-col justify-between">
      <h3 className=" text-palette-2 font-[700] text-[28px] leading-[36px] font-heading">{props.title}</h3>
      <div>
        <p className="text-[14px] leading-[20px] line-clamp-3 font-[400] my-[12px]">{props.description}</p>
        <div className="text-right">
          <Button
            color={'palate.2'}
            className="font-[500] rounded-lg"
            rightIcon={<FiChevronRight size={18} />}
            onClick={() => {
              openInNewTab(props.link);
            }}
          >
            Làm bài ngay
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
