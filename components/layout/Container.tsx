import React from 'react';

interface IContainerProps {
  children: JSX.Element | JSX.Element[];
}

const Container = ({ children }: IContainerProps) => {
  return <div className="min-h-[90vh] max-w-[1164px] m-auto">{children}</div>;
};

export default Container;
