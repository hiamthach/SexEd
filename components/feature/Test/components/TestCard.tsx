import React from 'react';

import { Button } from '@mantine/core';

import { FiChevronRight } from 'react-icons/fi';

const TestCard = () => {
  return (
    <div className=" w-[48%] rounded-[32px] px-[36px] py-[32px] bg-[#E0BBE466] mb-[36px]">
      <h3 className=" text-palette-2 font-[700] text-[28px] leading-[36px] font-heading">TITLE</h3>
      <p className="text-[14px] leading-[20px] line-clamp-3 font-[400] my-[12px]">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, autem facere placeat doloribus ad perferendis est quidem id optio amet dolor! Autem esse excepturi a sint
        odio, eveniet perferendis dolores?
      </p>
      <div className="text-right">
        {/* <CusBtn content="Làm bài ngay" /> */}
        <Button color={'palate.2'} className="font-[500] rounded-lg" rightIcon={<FiChevronRight size={18} />}>
          Làm bài ngay
        </Button>
      </div>
    </div>
  );
};

export default TestCard;
