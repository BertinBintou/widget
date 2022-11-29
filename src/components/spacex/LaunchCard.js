import React from 'react';

 const LaunchCard = ({spacexData}) =>{
    
    return (
        <div>
            
           <p>{spacexData.name} </p>
           <p>{spacexData.flight_number}</p>
           <p>{spacexData.date_local}</p>
           
        </div>
    )
}

export default LaunchCard;
