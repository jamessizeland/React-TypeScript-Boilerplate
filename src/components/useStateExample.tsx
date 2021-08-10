import React, { useState } from 'react';
import { exampleType } from '../types';

const UseStateExampleComponent: React.FC = () => {
  // the generic is the < >
  // the union is the type | null
  const [simpleCount, setSimpleCount] = useState(0); // implicitly typed
  const [propsCount, setPropsCount] = useState<exampleType | null>(null); //explicitly typed

  const emailList = ['john@smith.com', 'jill@hill.com', 'queen@example.com'];

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setSimpleCount(simpleCount + 1);
          const rand = Math.floor(Math.random() * 3);
          setPropsCount({
            counter: rand,
            email: emailList[rand],
            indicator: !propsCount?.indicator || false,
          });
        }}
      >
        Increment local State
      </button>
      <p>this button has been pressed {simpleCount} times</p>
      <p>{JSON.stringify(propsCount)}</p>
    </div>
  );
};

export default UseStateExampleComponent;
