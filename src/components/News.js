
import React, {useState, useEffect} from 'react';
import NewsComp from './spacex/NewsCompo';


export default function News(){

const [ newsData, setNewsData]= useState([]);

const getSpacexData = async () => {

   
    const response = await fetch('https://newsapi.org/v2/top-headlines/?country=fr&int=10&apiKey=c685b03e270e4cb583895f9e370f4f22');
    const data = await response.json();
 

    console.log(data)
}

useEffect(()=>{
  
},[]

);

useEffect(() => {
    console.log(newsData)
}, [newsData])



return (
        <div className=' widgcontainer spacex'>
        
            <NewsComp spacexData={newsData}/>
            {newsData}
            
        </div>
    )
}

