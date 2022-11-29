
import React from 'react';
import {useEffect, useState} from 'react';




  export default function Github(){

    const [githubData, setGithubData] = useState([])
const [githubUser, setGithubUser] = useState("vikstack")


    const fetchData = () => {
        return fetch(`https://api.github.com/users/${githubUser}`)
          .then((response) => response.json())
          .then((data) => setGithubData(data));
      }
    
      useEffect(() => {
        fetchData()
      }, [])

    return ( 
        <div>

          <div>
           
        </div>

        <img src={githubUser.avatar_url} height="100" width="100" />
        <p>{githubUser.name}</p>

        
        </div>
    );

  }