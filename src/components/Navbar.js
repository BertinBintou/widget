import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';



const Navbar =(props)=> {


    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);


    return <div> 

<div className='header' >
                <h1> 
                    Widget 
                </h1>
             
            
            </div>    


         </div>
}

export default Navbar;