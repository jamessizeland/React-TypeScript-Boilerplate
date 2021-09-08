import React, { useState, useEffect } from 'react';

const UseEffectExample = (): JSX.Element => {
  const [random, setRandom] = useState(0);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    setBusy(true);
    setTimeout(() => {
      setBusy(false);
    }, 1000);
  }, [random]);

  const randomiser = (multiplier = 1): number => {
    /** Pick a random number  */
    return Math.random() * multiplier;
  };

  return (
    <div>
      <p>Use Effect</p>
      <button type="button" onClick={() => setRandom(randomiser(5))}>
        Test Use Effect
      </button>
      <p>
        {random} {busy ? 'loading' : 'idle'}
      </p>
    </div>
  );
};

export default UseEffectExample;
