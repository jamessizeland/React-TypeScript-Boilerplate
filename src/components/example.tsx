import React, { useState } from 'react';

const ExampleComponent = (): JSX.Element => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button type="button" onClick={() => setCount(count + 1)}>
        Increment local State
      </button>
      <p>this button has been pressed {count} times</p>
    </div>
  );
};

export default ExampleComponent;
