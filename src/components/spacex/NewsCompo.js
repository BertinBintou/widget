import React from 'react';
import {Badge} from 'reactstrap';

export default function ListOfSpaceXLaunches  ({spacexData})  {

    let  succes = spacexData.success;
       if (succes){
          succes = "success"
    };


    return (
        <div className='widgcontainer cardSpaceX'>
        <Badge
        className="text-dark badge"
        color="light"
        pill >
        X
        </Badge>
         <p>SpaceX  launch</p>

         <p>{spacexData.title}</p>
         <p></p>
         <p></p>
         <p></p>
         <p></p>  
        
          
                
                
        </div>
    )
}


