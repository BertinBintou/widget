import axios from 'axios';
import React, {useState} from 'react';


const CardBook=()=>{

   
    const [search, setSearch]=useState("");
const [bookData, setBookData]=useState([]);


const searchBook=(evt)=>{
    if(evt.key==="Enter"){
       axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyDoa018Jk6m4dhIZbwwJ-Djpz8RrmWnVoo'+"&maxResults=2")
       .then(res=>setBookData(res.data.items))
       .catch(err=>console.log(err))
            }
    
        }

    return(
        <> 
         
      
        </>
            
    )
    
}
export default CardBook;