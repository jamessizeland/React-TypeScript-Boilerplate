import React from 'react';
import UseStateExampleComponent from '../../components/useStateExample';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import style from './App.module.scss';

const App = (): JSX.Element => {
  return (
    <div>
      <p className={style.example}>Hello World from React</p>
      <UseStateExampleComponent />
    </div>
  );
};

export default App;
