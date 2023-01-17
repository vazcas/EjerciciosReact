import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <p>{count}</p>
        <button onClick={() => setCount((count) => count + 1)}>
          Aumentar
        </button>

        <button onClick={() => setCount((count) => count - 1)}>
          Disminuir
        </button>

        <button onClick={() => setCount((count) => count = 0)}>
          Reset
        </button>
      </div>
    </>
  )
}

export default App
