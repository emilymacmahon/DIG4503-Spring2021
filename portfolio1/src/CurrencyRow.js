import React from 'react'

export default function CurrencyRow(props) {
  const {
      //destructuring currency props into objects
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount
  } = props
  // input type will be a number so the converter can calculate based off the number input
  return (
    <div>
      <input type="number" className="input" value={amount} onChange={onChangeAmount} />
      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map(option => (
            //looping through currency options
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}