import React from 'react';

import { useRouter } from 'next/router';
import Image from 'next/image';

import { IconArticle } from '@tabler/icons';

import CusBtn from 'components/common/CusBtn/CusBtn';

const HomeSlogan = () => {
  const router = useRouter();

  return (
    <div className="w-full py-[70px] flex gap-[42px] xl:gap-[82px] items-center flex-col md:flex-row">
      {/* <h3 className="font-heading text-[32px] leading-[36px] text-palette-2 text-center mx-auto">Chung tay xây dựng trường học không định kiến!</h3>

      <div className="flex justify-between items-center">
        <div className="w-[45%]">
          <h4 className="font-heading text-[30px] leading-[36px]">Bài viết</h4>
          <p className="text-[#9095A1FF] text-[18px] leading-[24px] my-[16px]">
            Cổng thông tin về giáo dục giới tính toàn diện. Luôn cập nhật sớm nhất những bài viết bổ ích cho giới trẻ.
          </p>
          <CusBtn content="Xem thêm" onClick={() => router.push('/blog')} />
        </div>
        <Image width={400} height={400} alt="" className="w-[45%] max-w-[400px] h-auto" src={'/images/img-1.png'} />
      </div> */}

      <div className="w-full text-center md:text-left md:w-[40%]">
        <h3 className="font-heading text-[32px] leading-[36px] text-palette-2 ">Chung tay xây dựng trường học không định kiến!</h3>
        <p className="text-[16px] mt-[16px] leading-[24px]">
          Người sử dụng sẽ nhận biết được những thông tin được cung cấp về Xu hướng tính dục và các bệnh lây truyền/ nhiễm trùng qua đường tình dục thông qua việc trả lời những câu
          hỏi trắc nghiệm, từ đó web sẽ đề xuất những trung tâm, cơ sở tham vấn/ khám/ chữa trị các nhu cầu, vấn đề của người dùng.
        </p>
      </div>

      <div className="w-full md:w-[60%] flex gap-[40px] flex-col sm:flex-row">
        <div
          className="rounded-[36px] bg-light p-[32px] w-full sm:w-[50%] hover:shadow-lg cursor-pointer"
          onClick={() => {
            router.push('/blog');
          }}
        >
          <IconArticle className="text-palette-2" size={48} />
          <h3 className="font-heading text-palette-2 text-[24px] mb-2">Bài viết</h3>
          <p className="text-[16px] font-[400]">Cổng thông tin về giáo dục giới tính toàn diện. Luôn cập nhật sớm nhất những bài viết bổ ích cho giới trẻ.</p>
        </div>
        <div
          className="rounded-[36px] bg-light p-[32px] w-full sm:w-[50%] hover:shadow-lg cursor-pointer"
          onClick={() => {
            router.push('/test');
          }}
        >
          <IconArticle className="text-palette-2" size={48} />
          <h3 className="font-heading text-palette-2 text-[24px] mb-2">Làm trắc nghiệm</h3>
          <p className="text-[16px] font-[400]">
            Trả lời ngắn gọn cho các câu hỏi quan trọng xung quanh tuổi teen: xu hướng tính dục của tôi là gì? Liệu tôi có đang mắc các bệnh lây truyền qua đường tình dục,...?
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeSlogan;
