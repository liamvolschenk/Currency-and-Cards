import React from 'react'

//passing the necessary currency rate information to this component with props
export default function CurrencyRow(props) {
    const {
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        onChangeAmount,
        amount
    } = props;
    return (
        <div>
            <input className="input" type="number" value={amount} onChange={onChangeAmount} />
            <select value={selectedCurrency} onChange={onChangeCurrency}>
                {currencyOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}

