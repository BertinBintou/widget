
import React, {useState, useEffect} from 'react';
import ListOfSpaceXLaunches from './ListOfSpaceXLaunches';


export default function SpaceX(){

const [ spacexData, setSpacexData]= useState([]);

const getSpacexData = async () => {

 
    const response = await fetch('https://api.spacexdata.com/v5/launches/latest');
    const data = await response.json();
    setSpacexData(data);

    console.log(data)
}

useEffect(()=>{
    getSpacexData();
},[]

);

useEffect(() => {
    console.log(spacexData)
}, [spacexData])

const obj = JSON.stringify(spacexData);
const text =  JSON.parse(obj)
return (
        <div className=' widgcontainer spacex'>        
            <ListOfSpaceXLaunches spacexData={spacexData}/>
        </div>
    )
}

