import React, { useState, useEffect } from 'react';
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
import { routes } from 'routes';
import { useScrollDirection } from '../../../hooks';

interface HeaderProps {
  isHome: boolean;
}

function Header({ isHome }: HeaderProps): JSX.Element {
  const { toggle } = useToggle();

  const [isMounted, setIsMounted] = useState(!isHome);
  const scrollDirection = useScrollDirection({
    initialDirection: 'up',
    thresholdPixels: 20,
  });
  const [scrolledToTop, setScrolledToTop] = useState(true);

  const handleScroll = () => setScrolledToTop(window.pageYOffset < 50);

  useEffect(() => {
    // if (prefersReducedMotion) {
    //   return;
    // }

    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log(scrollDirection);
  }, [scrollDirection]);

  return (
    <header
      className={clsx(
        scrollDirection === 'up' ? 'translate-y-0' : '-translate-y-20',
        'transition ease-in-out duration-500',
        'z absolute z-10 top-0 w-full font-inter bg-white lg:fixed lg:px-container',
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
