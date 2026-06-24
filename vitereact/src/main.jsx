import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Newfile from './Newfile.jsx'

function MyApp(){
  const username='chai aur code'
  return(
    <div>
      <Newfile/>
      <h1>Return {username}</h1>
      <h1>Custom App</h1>
    </div>
  )


}
/*const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank',
    },
    children: 'Click me to visit google',
}*/


const AnotherElement=(
  <a href="https://google.com" target='_blank'>Visit google</a>
)
const anele="chai aur code"

const reactElement= React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'Click me to visit google',
  anele
)

createRoot(document.getElementById('root')).render(
    MyApp()    
)
