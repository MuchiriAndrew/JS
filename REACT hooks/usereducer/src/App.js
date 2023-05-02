import React, { useReducer } from 'react';

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT:  'decrement'
}


function reducer(state, action) {

  switch(action.type){
    case ACTIONS.INCREMENT:
    return {count: state.count + 1}

    case ACTIONS.DECREMENT:
    return {count: state.count -  1}

    default:
    return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {count: 0})
  
  //useReducer gives you set actions that you can perfom on your state and it can convert your current state to the new state based on the action that you send it 

  // useReducer function takes 2 parameters, first is the function that will run to convert our current state to our new state and 2nd is the initial value
  
  //dispatch function is what we call to update our state


  function increment() {
    dispatch( {type: ACTIONS.INCREMENT})
  }

  function decrement() {
    dispatch( {type: ACTIONS.DECREMENT})
    
  } 

  return(
    <>
    <button onClick={decrement}>-</button>
    <span>{state.count}</span>
    <button onClick={increment}>+</button>
    </>

  );
}

export default App;
