import React, { useEffect } from 'react';
import clsx from 'clsx';
import {
  Navbar,
  NavbarBrand,
  NavbarItem,
  NavbarToggler,
  NavbarLink,
  NavbarNav,
} from '../../Elements';
import { useToggle } from '../helpers/context';
import Logo from '../Logo';
import { routes } from 'Routes';
import { useScrollDirection } from 'Hooks';

function Header(): JSX.Element {
  const { toggle } = useToggle();
  const scrollDirection = useScrollDirection({
    initialDirection: 'up', // this is so the navbar is present on page load
    thresholdPixels: 50,
  });

  useEffect(() => {
    console.log(scrollDirection);
  }, [scrollDirection]);

  return (
    <header
      className={clsx(
        scrollDirection === 'up' ? 'translate-y-0' : '-translate-y-20',
        'transition ease-in-out duration-500',
        'z fixed z-10 top-0 w-full font-inter bg-white lg:fixed lg:px-container',
      )}
    >
      <Navbar className={clsx('text-white bg-primary')}>
        <NavbarBrand href="/">
          <Logo />
        </NavbarBrand>
        <NavbarNav position="right">
          <NavbarItem>
            <NavbarLink href="#">
              <span className="pl-1">First Link</span>
            </NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink href="#">
              <span className="pl-1">Docs</span>
            </NavbarLink>
          </NavbarItem>
        </NavbarNav>
        <NavbarToggler toggle={toggle} />
      </Navbar>
    </header>
  );
}

export default Header;
