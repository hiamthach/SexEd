import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import stripe from 'public/images/stripe-bar.svg';

import Button from 'components/common/Button/Button';

interface NavProps {
  title: string;
}

const Navbar = ({ title }: NavProps) => {
  return <nav className="w-[340px]">Navbar</nav>;
};

export default Navbar;
