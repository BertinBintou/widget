import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Button, Input,} from 'reactstrap';
import RepoDetail from './RepoDetail';


export default function GitRepo(){
    
    const [username, setUsername]=useState("");
    const [loading, setLoading]=useState(false);
    const [repos, setRepos]=useState([]);
    const [details, setDetails]=useState({});
    const [detailsLoading, setDetailsLoading]=useState(false)

    useEffect(()=>{
        setRepos([]);
        setDetails({});
    },[username]);

    function handleSubmit(e){
        e.preventDefault();
        searchRepos();
    };

    function searchRepos(){
        setLoading(true);
        axios({
            method:"get",
            url:"https://api.github.com/users/"+username+"/repos",
        }).then(res=>{
            setLoading(false);
            setRepos(res.data);  
        }); 
    }

    function renderRepo(repo){
        return(
            <div className='renderrepo' onClick={()=> getDetails(repo.name)} key={repo.id}>
               
                <div>{repo.name}</div>
                {repo.full_name}

            </div>
        )
    }

    function getDetails(repoName){
        setDetailsLoading(true);
        axios({
            method:"get",
            url:"https://api.github.com/repos/"+username+"/"+repoName,
        }).then(res=> {
            setDetailsLoading(false);
            setDetails(res.data);
        });
    }
    return(

        <div>
        <div className='widgcontainer gitcontainer'>
            <form className="formInput">
                <Input className="gitinput"
                type="text"
                value={username}
                placeholder="search a git user"
                onChange={e => setUsername(e.target.value)}/>
                <Button className="buttonGit"   color="primary" size="sm" 
                onClick={handleSubmit}>
                 
                   {loading ? "Searching..." : "Search"} 
                    </Button>
               
            </form>

            
            
        <div className='widgcontainer gitutilisateur'> </div>
        <div > 
            {repos.map(renderRepo)}
            <RepoDetail details={details} loading={detailsLoading}/>
        </div>
       
        </div>

      
        </div>

    )
}