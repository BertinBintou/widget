import React, {useState, useEffect} from 'react';
import ConvertBox from './ConvertBox';


export default function Convert(){
 
    const BASE_URL ="https://api.exchangerate.host/latest";
    const [currencyOptions,setCurrencyOptions ]= useState([])
    const [fromCurrency,setFromCurrency ]=useState()
    const [toCurrency,setToCurrency ]=useState()
    const [exchangeRate,setExchangeRate]=useState()
    const [amount,setAmount]= useState(1)
    const [amountInFromCurrency,setAmountInFromCurrency]=useState(true)
   
    let toAmount, fromAmount 
    if(amountInFromCurrency){
        fromAmount = amount
        toAmount = amount * exchangeRate
    }else{
        toAmount = amount
        fromAmount = amount / exchangeRate

    }

    useEffect(()=>{
        fetch("https://api.exchangerate.host/latest")
        .then(res => res.json())
        .then(data=> {
            const firstCurrency = Object.keys(data.rates)[0]
            setCurrencyOptions([data.base, ...Object.keys(data.rates)])
            setFromCurrency(data.base)
            setToCurrency(firstCurrency)
            setExchangeRate(data.rates[firstCurrency])

           
        })
        }, [])

        useEffect(()=>{
            if(fromCurrency != null && toCurrency != null){
                fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
                .then(res => res.json())
                .then(data => setExchangeRate(data.rates[toCurrency]) ) 
            }

            
        },[fromCurrency, toCurrency])

        function handleFromAmountChange(e){
            setAmount(e.target.value)
            setAmountInFromCurrency(true)
        }

        function handleToAmountChange(e){
            setAmount(e.target.value)
            setAmountInFromCurrency(false)
        }

    return(
        
        <div className='widgcontainer convertBox'>
            <h6>Currency converter</h6>
            <ConvertBox
            currencyOptions ={currencyOptions}
            SelectedCurrency={fromCurrency}
            onChangeCurrency ={e => setFromCurrency(e.target.value)}
            onChangeAmount={handleFromAmountChange}
            amount={fromAmount}

            />
            <div>=</div>
            <ConvertBox
            currencyOptions ={currencyOptions}
            SelectedCurrency ={toCurrency}
            onChangeCurrency ={e => setToCurrency(e.target.value)}
            onChangeAmount={handleToAmountChange}
            amount ={toAmount}
            />
         </div>
        
    )
}