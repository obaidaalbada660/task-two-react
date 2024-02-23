import { useState } from 'react'

import './App.css'

function App() {
  let [count, setCounter] = useState(0)

  const changeCounter = ()=>{
    setCounter(count+1);
  }
  return (
    <>
        <button onClick={changeCounter}>
        obaida albada {count}
        </button>
 
    </>
  )
}

export default App
