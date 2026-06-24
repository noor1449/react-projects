import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setlength] = useState(8)
  const [number, setNumberAllowed] = useState(false)
  const [char, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (number) str += "0123456789"
    if (char) str += "!@#%$^&*()_+{}|:<>?"

    for (let i = 1; i <= length; i++) {
      let characters = Math.floor(Math.random() * str.length)
      pass += str.charAt(characters)
    }
    setPassword(pass)
  }, [length, number, char, setPassword])

  const copytoclipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 50)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => { 
    passwordGenerator() 
  }, [length, number, char, passwordGenerator])

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center my-3 font-semibold text-lg'>Password Generator</h1>
      
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3 text-gray-700 bg-white'
          placeholder='password'
          readOnly
          ref={passwordRef}
        />
        <button 
          onClick={copytoclipboard}
          className='outline-none bg-blue-700 hover:bg-blue-800 text-white px-3 py-0.5 shrink-0 transition-colors'
        >
          Copy
        </button>
      </div> 

      <div className='flex text-sm gap-x-2 justify-between'>
        <div className='flex items-center gap-x-1'>
          <input 
            type="range"
            min={8}
            max={40}
            value={length}
            className='cursor-pointer'
            onChange={(e) => { setlength(Number(e.target.value)) }}
          />
          <label>Length: {length}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input 
            type="checkbox" 
            defaultChecked={number}
            id='numberInput'
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input 
            type="checkbox" 
            defaultChecked={char}
            id='charInput'
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App