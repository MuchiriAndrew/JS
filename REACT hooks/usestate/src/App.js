import React, { useState } from 'react';

function App() {

const [count, setCount] = useState(4)

// what we pass into the useState is what the default state is e.g if 4 the counter will start as 4

// useState returns an array with 2 values i.e the current state i.e count and the function that updates the state i.e setCount

function decrementCount() {
  setCount(prevCount => prevCount - 1)
}

function increamentCount() {
  setCount(prevCount => prevCount + 1)
}

  return(
    <>
    <button onClick={decrementCount}>-</button>
    <span>{count}</span>
    <button onClick={increamentCount}>+</button>
    </>

  );
}

export default App;
