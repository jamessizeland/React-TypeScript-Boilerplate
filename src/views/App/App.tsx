import React, { useContext } from 'react';
import UseStateExampleComponent from '~/components/useStateExample';
import UseEffectExample from '~/components/useEffectExample';
import { UseReducerExample } from '~/reducers/useReducerExample';
import { exampleContext } from '~/contexts/useContextExample';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import style from './App.module.scss'; // css-module import

const App = (): JSX.Element => {
  const data = useContext(exampleContext);
  return (
    <div>
      {JSON.stringify(data)}
      <p className={style.example}>Hello World from React</p>
      <UseStateExampleComponent />
      <UseReducerExample />
      <UseEffectExample />
    </div>
  );
};

export default App;
