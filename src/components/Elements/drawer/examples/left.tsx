import React from 'react';
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, Button } from '../../';
import { useToggle } from 'hooks/';

const DrawerLeft = (): JSX.Element => {
  const { toggle, isOpen } = useToggle();
  return (
    <div className="mb-8">
      <h2 className="mb-3 mt-12 text-gray-600 text-lg font-bold md:text-2xl">
        Left
      </h2>
      <Button onClick={toggle} color="primary">
        Click to open me
      </Button>
      <Drawer isOpen={isOpen} toggle={toggle} position="left">
        <DrawerHeader>Drawer title</DrawerHeader>
        <DrawerBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </DrawerBody>
        <DrawerFooter>
          <Button onClick={toggle} color="danger" className="mr-1">
            Close
          </Button>
          <Button onClick={toggle} color="primary">
            Confirm
          </Button>
        </DrawerFooter>
      </Drawer>
    </div>
  );
};

export default DrawerLeft;