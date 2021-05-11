import React from 'react';
import UseStateExampleComponent from '../components/useStateExample';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = (): JSX.Element => {
  return (
    <div>
      <p>Hello World from React</p>
      <UseStateExampleComponent />
    </div>
  );
};

export default App;
