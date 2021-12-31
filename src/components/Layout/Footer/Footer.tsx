import React from 'react';
import Socials from './Socials';
import Body from './FooterBody';
import Copywrite from './Copywrite';

import pjson from '../../../../package.json';
const { author, repository, version } = pjson;

export default function Footer() {
  return (
    <footer className="text-center lg:text-left bg-gray-100 text-gray-600">
      <Socials
        className="bg-secondary border-bottom border-gray-600"
        github={repository}
      />
      {/* <Body /> */}
      <Copywrite
        className="bg-secondary"
        repo={repository}
        author={author}
        version={version}
      />
    </footer>
  );
}
