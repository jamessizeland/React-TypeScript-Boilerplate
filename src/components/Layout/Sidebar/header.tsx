import React from 'react';
import logo from 'Assets/logo.svg';

const SidenavHeader = () => (
  <div className="top-0 flex mb-4 pl-4 bg-white lg:hidden">
    <img src={logo} width={100} height={100} alt="logo" />
  </div>
);

export default SidenavHeader;
