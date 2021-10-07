import React from 'react';
import { decreaseCounter, increaseCounter } from "./redux/Counter/counter.actions"
import { useDispatch, useSelector } from "react-redux"

import './App.css';

function App() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.count)


  return (

    <div className='App'>

      <div>Count: {counter}</div>
      <button onClick={() => dispatch(increaseCounter())}>Increase Count</button>
      <button onClick={() => dispatch(decreaseCounter())} >Decrease Count</button>
    </div>

  );

}


export default App;