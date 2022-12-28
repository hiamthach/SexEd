import React from 'react';

import TestCard from './TestCard';
import CusBtn from 'components/common/CusBtn/CusBtn';

import testData from 'data/test';

const TestContent = () => {
  const renderTest = () => {
    return testData.map((test) => {
      return <TestCard {...test} key={test.id} />;
    });
  };

  return <div className="flex flex-wrap justify-between">{renderTest()}</div>;
};

export default TestContent;
