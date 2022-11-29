import React, {useState, useEffect} from 'react';
import MovieBox from './MovieBox';
import { Button, Form, Input, } from 'reactstrap';




export default function Movie(){

const [movies, setMovies]=useState([]);
const [query, setQuery]=useState('');

useEffect(() =>{
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=bf62ce96d287c92e0b10f392118fdbba')
    .then((res)=>res.json())
    .then(data=>{
        console.log(data)
        
        setMovies(data.results);
    })
},[])

const searchMovie = async(e)=>{
    e.preventDefault();
    console.log("searching");
    try{
        const url="https://api.themoviedb.org/3/search/movie?api_key=bf62ce96d287c92e0b10f392118fdbba&query="+query;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        setMovies(data.results);
    }
    catch(e){
        console.log(e);
    }
}

const changeHandler =(e)=>{
    setQuery(e.target.value);
}
return(

   
    <div>
        <div className='widgcontainer moviecontainer'>
        <h6>Pick a movie</h6>
            <div> 
                <Form  type="search" onSubmit={searchMovie}
                name="query"
                value={query} onChange={changeHandler}>
                    
                <Input  placeholder="search a movie" type="text" className='inputBook' />
                <Button className='movieAdd' color="primary" size="sm" type='submit'>search</Button>
                </Form>
               
                
            </div>

        </div>
            {
               movies.map((movieReq)=>
               <MovieBox key={movieReq.id} {...movieReq} />
               ) 
            }
    </div>
    )



}