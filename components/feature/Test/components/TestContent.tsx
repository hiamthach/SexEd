import React from 'react';

import TestCard from './TestCard';
import CusBtn from 'components/common/CusBtn/CusBtn';

const TestContent = () => {
  return (
    <div className="flex flex-wrap justify-between">
      <TestCard />
      <TestCard />
      <TestCard />
      <TestCard />
      <TestCard />
      <TestCard />
    </div>
  );
};

export default TestContent;
