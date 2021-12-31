import React from 'react';
import Socials from './Socials';
import Body from './FooterBody';
import Copywrite from './Copywrite';

export default function Footer() {
  return (
    <footer className="text-center lg:text-left bg-gray-100 text-gray-600">
      <Socials
        className="bg-secondary"
        github="https://github.com/jamessizeland/React-TypeScript-Boilerplate"
      />
      <Body />
      <Copywrite className="bg-secondary" />
    </footer>
  );
}
