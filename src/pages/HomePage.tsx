import React from 'react';
import { Accordion } from '../components/Elements';

export const HomePage = () => (
  <div className="">
    <h1 className="text-3xl font-bold underline text-center">Home Page</h1>
    <Accordion title="title">
      <p>content</p>
    </Accordion>
  </div>
);
