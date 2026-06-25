import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [counter,setCounter]=useState(15)
 const addValue=()=>{
      if(counter<20){setCounter(counter+1)}
 }
 const removeValue=()=>{
  if(counter>0){
      setCounter(counter-1)}
 }

 
  return (
    <>
    <h1 className='hero'>Counter Project</h1>
    <h2>Counter Value: {counter}</h2>
    <button onClick={addValue}>Add Value{addValue}</button>
    <button onClick={removeValue}>Remove Value {removeValue}</button>
    </>
  )
}

export default App
