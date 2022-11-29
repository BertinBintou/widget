import React from 'react';


const MovieBox =({title,poster_path,vote_average,release_date,overview


})=>{

    return(
        <div className='widgcontainer  moviebox'>
            
            <img className='movieImag' src={"https://image.tmdb.org/t/p/w500/"+poster_path}/>
            <div className='titreMovie'>{title}</div>
            <div>Note : {vote_average}</div>
            <div>Data : {release_date}</div>
            <p>{overview}</p>

        </div>
    )
}

export default MovieBox;