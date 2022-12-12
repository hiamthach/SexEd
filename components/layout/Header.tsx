import React from 'react';

import Navbar from 'components/feature/Home/components/Navbar';

interface HeaderProps {
  title: string;
  headerBanner?: HTMLVideoElement | HTMLImageElement;
}

const Header = ({ title, headerBanner }: HeaderProps) => {
  return (
    <header>
      <Navbar title={title} />
    </header>
  );
};

export default Header;
