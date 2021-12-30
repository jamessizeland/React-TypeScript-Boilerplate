import React, {
  ReactNode,
  useEffect,
  useRef,
  createContext,
  useContext,
  useState,
  useCallback,
} from 'react';
import clsx from 'clsx';

interface Props {
  children: ReactNode;
}

interface INavbarContextProps {
  open?: boolean;
  toggle?: () => void;
}

interface INavbarProps extends Props {
  className?: string;
}

interface INavbarBrandProps extends Props {
  href: string;
}

interface INavbarNavProps extends Props {
  position?: 'left' | 'center' | 'right';
}

interface INavbarLinkProps extends INavbarBrandProps {
  active?: boolean;
  activeClass?: string;
  external?: boolean;
}

const style = {
  // navbar: `relative px-4 py-2 shadow top-0 w-full lg:flex lg:flex-row lg:items-center lg:justify-start lg:relative`,
  navbar: 'font-light h-16 relative flex items-center flex-row justify-start',
  // brand: `cursor-pointer font-bold inline-block mr-4 py-1.5 text-2xl whitespace-nowrap hover:text-gray-200`,
  brand: `inline-block cursor-pointer pl-1`,
  active: `text-purple-800`,
  // toggler: `block float-right text-4xl lg:hidden focus:outline-none focus:shadow`,
  toggler: `ml-auto flex lg:hidden pr-3 text-5xl focus:outline-none focus:shadow px-2`,
  // item: `whitespace-pre cursor-pointer px-4 py-3 hover:text-gray-200`,
  collapse: {
    default: `border-t border-gray-500 fixed left-0 mt-2 shadow py-2 text-center lg:border-none lg:flex lg:flex-grow lg:items-center lg:mt-0 lg:py-0 lg:relative lg:shadow-none`,
    open: `h-auto visible transition-all duration-500 ease-out w-full opacity-100 lg:transition-none`,
    close: `h-auto invisible w-0 transition-all duration-300 ease-in lg:opacity-100 lg:transition-none lg:visible`,
  },
  // nav: {
  //   start: `block mb-0 mr-auto pl-0 lg:flex lg:mb-0 lg:pl-0`,
  //   middle: `block mb-0 ml-auto pl-0 lg:flex lg:pl-0 lg:mb-0 lg:mx-auto`,
  //   end: `block pl-0 mb-0 ml-auto lg:flex lg:pl-0 lg:mb-0`,
  // },
  link: `cursor-pointer px-4 text-gray-900 hover:text-black font-medium`,
  position: {
    center: `flex pl-0 mb-0 mx-auto pr-8 lg:hidden`,
    left: `hidden lg:pl-0 lg:mb-0 lg:mr-auto md:flex`,
    right: `hidden lg:pl-0 lg:mb-0 lg:ml-auto lg:flex`,
  },
};

const Context = createContext<INavbarContextProps>({});

function Navbar({ children, className }: INavbarProps) {
  return <nav className={clsx(className, style.navbar)}>{children}</nav>;
}

// ! You can wrap the a tag with Link and pass href to Link if you are using either Create-React-App, Next.js or Gatsby
function NavbarBrand({ children, href }: INavbarBrandProps) {
  return (
    <a href={href} className={style.brand}>
      <strong>{children}</strong>
    </a>
  );
}

function NavbarToggler({ toggle }: { toggle: () => void }) {
  return (
    <button
      // type="button"
      // aria-expanded="false"
      // aria-label="Toggle navigation"
      className={style.toggler}
      onClick={toggle}
    >
      &#8801;
    </button>
  );
}

const useToggle = () => useContext(Context);

function NavbarCollapse({ children }: Props) {
  const { open } = useToggle();
  return (
    <div
      style={{ backgroundColor: 'inherit' }}
      className={`${style.collapse.default}
        ${open ? style.collapse.open : style.collapse.close}`}
    >
      {children}
    </div>
  );
}

function NavbarNav({ children, position = 'right' }: INavbarNavProps) {
  return <ul className={style.position[position]}>{children}</ul>;
}

function NavbarItem({ children }: Props) {
  return <li>{children}</li>;
}

//! You can wrap the a tag with Link and pass href to Link if you are using either Create-React-App, Next.js or Gatsby
function NavbarLink({
  children,
  href,
  active,
  external,
  ...props
}: INavbarLinkProps) {
  return (
    <div className={style.link}>
      {external ? (
        <a className="flex" {...props} href={href}>
          {children}
        </a>
      ) : (
        <a href={href} className="flex" {...props}>
          {children}
        </a>
      )}
    </div>
  );
}

export {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarNav,
  NavbarItem,
  NavbarLink,
  NavbarToggler,
};
