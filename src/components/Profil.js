import React from 'react';
import Navbar from './Navbar';
import SpaceX from './spacex/SpaceX';
import Cat from './cat/Cat';
import Book from './Book/Book';
import Movie from './movie/Movie';
import Convert from './convert/Convert';




export default function Profil(){

    let user = {
        name: 'Bertin',
        reseau: 'Epitech',
        age: 25
      };
  
    return(
        <div>
            <Navbar/>

            
            <div className='User-widget'>
                <div className='user'>
                   <img className='profil-img'
                alt="Sample"
                src="https://cdn.shopify.com/s/files/1/0287/6738/7780/products/PORTRAIT-OLLOW-BLEU_720x.png?v=1597638270"/>

            <div>
                <h3>{user.name}</h3>
            </div>

                
            
            </div>
           
                 <div className='container'>         
          
                   <SpaceX/>
                   <Cat/>   
                
                </div>
                
            </div>
                 <div className='widgList'>

                    <Convert/>
                    <Book/>
                    <Movie/>
           
                 </div>

        </div>
    )
}