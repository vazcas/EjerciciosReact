import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ComponenteUno from './Components/ComponenteUno'
import ComponenteDos from './Components/ComponenteDos'
import './App.css'


function App() {
 
  return(
  <>
    <ComponenteUno telefono="695763423" />
    <ComponenteDos telefono="627134354" />
  </>
  )
  
}

export default App
