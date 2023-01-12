import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Function from './Function'
import Variable from './Variable'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Function/>
      <Variable/>
    </div>
  )
}

export default App
