import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(1)
  function addone(){
    setCount(count+1)
  }
  function subone(){
    setCount(count-1)
  }

  return (
    
    <>

    <button onClick={addone}>add one </button>
        <p>click the button{count} </p>
    <button onClick={subone}>delete one </button>
    <h1>this is the count value ---{count}</h1>
    </>
  )
}

export default App
