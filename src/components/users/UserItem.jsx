import GithubContext from '../../context/github/GithubContext';
import { useContext } from 'react'
import {Link} from 'react-router-dom'
function UserItem () {                      
    const {users} = useContext(GithubContext)
    console.log('rendering')
    return ( 
        users.map((user)=>{
            return (
                <div key={user.id} className="card shadow-md compact side bg-base-100">
                    <div className="flex-row items-center space-x-4 card-body">
                        <div className="">
                            <div className="avatar">
                                <div className="rounded-full shadow w-14 h-14">
                                    <img src={user.avatar_url} alt='Profile' />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="card-title">{user.login}</h2>
                        <Link to={`/user/${user.login}`} className='text-base-content text-opacity-40'>
                                Visit Profile
                            </Link>
                        </div>
                    </div>
                </div>
            )
        })
     );
}

export default UserItem;