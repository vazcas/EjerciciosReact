import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Menu from './Menu'
import Card from './Card'

function App() {
  return (
    <>
      <Menu/>
      <div>
        <Card/>
        <Card/>
      </div>
      <div>
        <Card/>
        <Card/>
      </div>
      <div>
        <Card/>
        <Card/>
      </div>
      <div>
        <Card/>
        <Card/>
      </div>    
    </>
  )
}

export default App
