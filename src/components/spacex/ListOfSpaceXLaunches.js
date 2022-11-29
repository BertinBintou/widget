import React from 'react';

export default function ListOfSpaceXLaunches  ({spacexData})  {

    let  succes = spacexData.success;
       if (succes){
          succes = "success"
    };


    return (
        <div className='widgcontainer cardSpaceX'>
       
         <h6>SpaceX  launch</h6>
         <p>Name : {spacexData.name}</p>
         <p>Flight number : {spacexData.flight_number}</p>
         <p>Date local : {spacexData.date_local}</p>
         <p>Date UTC : {spacexData.date_utc}</p>
         <p>Landing : {succes}</p>                
                
        </div>
    )
}


