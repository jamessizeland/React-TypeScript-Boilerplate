import React from 'react';
import AccordionFirstExample from '../components/Elements/accordion/examples/first';
import AutocompleteExample from '../components/Elements/autocomplete/examples/index';
import ButtonAnimateExample from '../components/Elements/button/examples/animateButton';
import CardExample from '../components/Elements/card/examples/multiple';
import CollapseExample from '../components/Elements/collapse/examples/first';
import CurtainExample from '../components/Elements/curtain-menu/examples/top';
import DrawerExample from '../components/Elements/drawer/examples/right';
import DropdownExample from '../components/Elements/dropdown/examples/with-divider';
import SideNavExample from '../components/Elements/sidenav/examples/left';

export const HomePage = () => (
  <div className="">
    <h1 className="text-3xl font-bold underline text-center">Home Page</h1>
    <AccordionFirstExample />
    <AutocompleteExample />
    <ButtonAnimateExample />
    <CardExample />
    <CollapseExample />
    <CurtainExample />
    <DrawerExample />
    <DropdownExample />
    <SideNavExample />
  </div>
);
