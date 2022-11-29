import React from 'react';
import {Input} from 'reactstrap';

export default function ConvertBox(props){
    const {currencyOptions,
           SelectedCurrency,
           onChangeCurrency,
           amount,
           onChangeAmount,
    }=props
    
    return(
        <div className='convertBoxcompo'>
            <Input type="number" value={amount} onChange={onChangeAmount} />
                <select className='selectConvert' value ={SelectedCurrency} onChange={onChangeCurrency} >
                        {currencyOptions.map( (option, index) =>(
                               <option key={index} value={option}>
                               {option}
                       </option>
                        ))}
                       </select>
                    </div>
            )
    }





