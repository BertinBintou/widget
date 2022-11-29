import React, {useState} from 'react';


export default function Cat(){

    const [ catUrl, setCatUrl]=useState("https://scontent-cdg2-1.xx.fbcdn.net/v/t1.6435-9/41435140_399716017227825_7161493550989836288_n.jpg?stp=cp0_dst-jpg_e15_p320x320_q65&_nc_cat=107&ccb=1-7&_nc_sid=7aed08&_nc_ohc=Wp3iAAdj9QgAX8kj2_-&_nc_ht=scontent-cdg2-1.xx&oh=00_AfAT3RkBGUGKQAdzz3lxpYbNxrSvd9vLY-Ot6AZRGckWmg&oe=63958DB7");
    const getUrlCat =()=>{
        fetch("https://api.thecatapi.com/v1/images/search")
        .then(res=>res.json())
        .then(data=>setCatUrl(data[0].url))
    }

    return (
        <div className=' widgcontainer catContainer'  onClick={()=>getUrlCat()}>
            <img  className=' widgcontainer catimg' src={catUrl}></img>
        </div>
    )
}