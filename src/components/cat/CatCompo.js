import React from 'react';
export default function CatCompo({artData})  {
    return (
        <div className='CatCompo'>
      
         <p> Art in Chicago </p>

         <p>Name : {artData.name}</p>
         <p>Flight number : {artData.flight_number}</p>
         <p>Flight number : {artData.date_local}</p>
                      
        </div>
    )
}


