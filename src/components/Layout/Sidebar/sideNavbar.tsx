import React from 'react';
import SidenavItems from './items';
import SidenavHeader from './header';
import { useToggle } from '../helpers/context';
import {
  Drawer,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from 'Components/Elements';

const SideNavigation = () => {
  const { open, toggle } = useToggle();

  return (
    <Drawer isOpen={open} toggle={toggle} position="right">
      <DrawerHeader>
        <SidenavHeader />
      </DrawerHeader>
      <DrawerBody>
        <ul className="md:pl-6">
          <SidenavItems />
        </ul>
      </DrawerBody>
      <DrawerFooter>Copyright 2021</DrawerFooter>
    </Drawer>
  );
};

export default SideNavigation;
