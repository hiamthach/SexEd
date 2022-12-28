import React from 'react';

interface IContainerProps {
  children: JSX.Element | JSX.Element[];
}

const Container = ({ children }: IContainerProps) => {
  return <div className="min-h-[90vh] w-full px-[24px] xl:max-w-[1164px] xl:px-0 m-auto">{children}</div>;
};

export default Container;
