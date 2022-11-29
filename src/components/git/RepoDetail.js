import React from "react";

export default function RepoDetail({details, loading}){
    if(loading){
        return(
            <h1 className="loader">en chargement...</h1>
        )
    }
return(
     
     <div className='widgcontainer'> 
    
        <div>
        {details.full_name}
        </div>



    </div>

)

}


