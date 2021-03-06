import React, { useEffect, useState } from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow'

//usestate will return an array of options for the currency, which will be currency options
// using the exchange rates API
const BASE_URL = 'https://api.exchangeratesapi.io/latest'

function App() {
  //setting state for the options
  const [currencyOptions, setCurrencyOptions] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()
  const [exchangeRate, setExchangeRate] = useState()
  const [amount, setAmount] = useState(1)
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)

  let toAmount, fromAmount
  if (amountInFromCurrency) {
    fromAmount = amount
    toAmount = amount * exchangeRate
  } else {
    toAmount = amount
    fromAmount = amount / exchangeRate
  }
// use effect gets called only the fitst time the function loads
  useEffect(() => {
    fetch(BASE_URL)
    //convert response to json
      .then(res => res.json())
      //returns the data
      .then(data => {
        // ... destructures the array
        //setting default currency with first item in currency array
        const firstCurrency = Object.keys(data.rates)[0]
        setCurrencyOptions([data.base, ...Object.keys(data.rates)])
        setFromCurrency(data.base)
        setToCurrency(firstCurrency)
        setExchangeRate(data.rates[firstCurrency])
      })
  }, [])

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
        .then(res => res.json())
        .then(data => setExchangeRate(data.rates[toCurrency]))
    }
  }, [fromCurrency, toCurrency])

  function handleFromAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(true)
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(false)
  }

  return (
    <>
    
      <h1>Convert</h1>
      <CurrencyRow
      //populates currency options into the currency rows
        currencyOptions={currencyOptions}
        selectedCurrency={fromCurrency}
        onChangeCurrency={e => setFromCurrency(e.target.value)}
        onChangeAmount={handleFromAmountChange}
        amount={fromAmount}
      />
      <div className="equals">=</div>
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectedCurrency={toCurrency}
        onChangeCurrency={e => setToCurrency(e.target.value)} // selected value of the target currency
        onChangeAmount={handleToAmountChange}
        amount={toAmount}
      />
    </>
  ); // items wrapped in fragments so they will render... empty elements that allow it to return something
}

export default App;