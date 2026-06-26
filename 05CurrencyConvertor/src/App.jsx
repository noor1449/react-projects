import { useState } from 'react'
import './App.css'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyinfo'

function App() {
  const [amount, setamount] = useState(0)
  const [from, setfrom] = useState("usd")
  const [to, setto] = useState("pkr")
  const [convertedamount, setConvertedamount] = useState("")

  const currencyinfo = useCurrencyInfo(from)
  const options = Object.keys(currencyinfo || {})

  const swap = () => {
    setfrom(to)
    setto(from)
    setConvertedamount(amount)
    setamount(convertedamount)
  }

  const convert = () => {
    if (currencyinfo && currencyinfo[to]) {
      setConvertedamount(amount * currencyinfo[to])
    }
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://tse1.mm.bing.net/th/id/OIP.wOQ-j3lUHvM9F4Ph1GiUNgHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3')`
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            {/* FROM INPUT BOX */}
            <div className='w-full mb-1'>
              <InputBox 
                label="from"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setfrom(currency)}
                onamountChange={(amount) => setamount(amount)}
                selectCurrency={from}
              />
            </div>

            {/* SWAP BUTTON */}
            <div className='relative w-full h-0.5'>
              <button
                type="button"
                className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 bg-blue-600 rounded-md border-white text-white px-2 py-0.5'
                onClick={swap}
              >
                swap
              </button>
            </div>

            {/* TO INPUT BOX */}
            <div className='w-full mt-1 mb-4'>
              <InputBox 
                label="to"
                amount={convertedamount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setto(currency)}
                selectCurrency={to} 
              />
            </div>

            <button 
              type='submit'
              className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App