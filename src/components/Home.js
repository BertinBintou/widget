import React from "react";
import Signin from './Signin';
import Singup from './Signup';


export default function Home() {
    return (
     <div>
     

    <div className='signin'>
  
      connexion
      <Signin/>
     </div>
    
    <div>
      <Singup/>
    </div> 


     </div>
    );
  }
  
