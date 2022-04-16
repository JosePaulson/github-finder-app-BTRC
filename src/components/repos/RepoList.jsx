import GithubContext from "../../context/github/GithubContext";
import { useContext, useEffect } from 'react'
import { useParams } from "react-router-dom";
import RepoItem from "./RepoItem";
function RepoList() {
    const {repos, getRepos} = useContext(GithubContext)

    const params = useParams()

    useEffect(()=>{
        getRepos(params.login)
        // eslint-disable-next-line
    }, [])

    return ( 
        <div className='card rounded-lg shadow-lg bg-base-100'>
            <div className="card-body">
                <h2 className="card-title text-3xl font-bold my-4">
                    Latest Repositories
                </h2>
                {repos.map((repo)=>{
                    return <RepoItem key={repo.id} repo={repo}/>
                })}
            </div>
        </div>
     );
}

export default RepoList;