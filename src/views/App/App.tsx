import React from 'react';
import UseStateExampleComponent from '../../components/useStateExample';
import Counter from '../../reducers/useReducerExample';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import style from './App.module.scss'; // css-module import

const App = (): JSX.Element => {
  return (
    <div>
      <p className={style.example}>Hello World from React</p>
      <UseStateExampleComponent />
      <Counter />
    </div>
  );
};

export default App;
