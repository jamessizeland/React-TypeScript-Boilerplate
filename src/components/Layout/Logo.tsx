import React from 'react';
import logo from '../../assets/logo.svg';

const Logo = (): JSX.Element => {
  return (
    <img
      src={logo}
      height={50}
      width={50}
      placeholder="blur"
      // objectFit="cover"
      alt="default logo"
    />
  );
};

export default Logo;
