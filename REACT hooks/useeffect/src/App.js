import React, { useState, useEffect } from 'react'


function App() {
  
  const [ resourceType, setResourceType] = useState('posts')
  const [ items, setItems] = useState([])

  useEffect(() => {

   fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
   .then(response => response.json())
   .then(json => setItems(json))

  }, [resourceType])

  //in function components we do not have lifecyle methods thus we have to use the useEffect hook
  //useEffect hook: we do some sort of side effect whenever something happens
  //useEffect takes in a second parameter which is an array consisting of values that whenever they change the useEffect takes effect e.g[resourceType]
  // when you leave the second array parameter empty i.e [] the hook will run on mount


  return (
    <>
    <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
    </div>

    <h1>{resourceType}</h1>
    {items.map(item => { 
      return <pre>{JSON.stringify(item)}</pre>
    })}


    </>
  )

}

export default App;
