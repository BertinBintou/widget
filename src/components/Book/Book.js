import React, {useState} from 'react';
import { Button, Input} from 'reactstrap';
import axios from 'axios';



const Book=()=> {
const [search, setSearch]=useState("");
const [bookData, setBookData]=useState([]);


const searchBook=(evt)=>{
    if(evt.key==="Enter"){
       axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyDoa018Jk6m4dhIZbwwJ-Djpz8RrmWnVoo')
       .then(res=>setBookData(res.data.items))
       .catch(err=>console.log(err))
    }
     
   
}

    
    return (
       <div className='containerBook'>
        <div className=' widgcontainer bookContainer'>
           
            <h6>Pick up a book</h6>
            <div>
                <Input  placeholder="search a book" type="text"
                value={search} onChange={e=>setSearch(e.target.value)}
                onKeyPress={searchBook}/>
            </div>

            <div>
                <Button color="primary" size="sm">
                    search
                </Button>
                {' '}
            </div>
            
        </div>


        
        <div>
        

                
             {
               bookData.map((item) => {
                    let image = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let name = item.volumeInfo.title && item.volumeInfo.title;
                    let author = item.volumeInfo.authors && item.volumeInfo.authors;
                    let edition = item.volumeInfo.publisher && item.volumeInfo.publisher;
                    let date = item.volumeInfo.publishedDate && item.volumeInfo.publishedDate;
                                 
                    return(
                     
                                          
                       <>
                             <div className='widgcontainer  cardbook'>
                             <img className='imgBook' src={image } /> 
                            <div>
                            <div>{name}</div>
                            <div>{author}</div>
                            <div>Editeur : {edition}</div>
                            <div>Date : {date}</div>
                        
                        
                           
                            </div>

                        </div>
                        </>
                                         
                       
                       ) 
                    }
                )
            } 
      
        </div>
        </div>
            
        
    )
}

export default Book;