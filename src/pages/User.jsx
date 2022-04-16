import {FaCodepen, FaUsers, FaUserFriends, FaStore, FaArrowLeft} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {useContext, useEffect} from 'react'
import GithubContext from '../context/github/GithubContext';
import {useParams} from 'react-router-dom'
import {loader} from '../components/users/UserResults'
import RepoList from '../components/repos/RepoList';
// import RepoItem from '../components/repos/RepoItem';
function User() {
    const { getUser, user, isLoading} = useContext(GithubContext)
    const params = useParams()
    const {
        name,
        type,
        avatar_url,
        location,
        bio,
        blog,
        twitter_username,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable,
    } = user
    
    useEffect(()=>{
        getUser(params.login)
        // eslint-disable-next-line
    }, [])

    function splitter (str) {
        let newStr = str.split('://')
        newStr.length === 2 ? newStr = newStr[1] : newStr = newStr.toString()
        return newStr
      }

    const content = (
        <div className='w-full mx-auto lg:w-10/12 '>
            <div className="mb-4">
                <Link className='btn btn-ghost' to='/'>
                    <FaArrowLeft className='mr-1'/>
                    Back To Search
                </Link>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-3 mb-4 md:gap-8">
                <div className="custom-card-image mb-6 md:mb-0">
                    <div className="rounded-lg card image-full">
                        <figure>
                            <img src={avatar_url} alt={name} />
                        </figure>
                        <div className="card-body justify-end">
                            <h2 className="card-title mb-0">{name}</h2>
                            <span>{login}</span>
                        </div>
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="mb-6">
                        <h1 className="text-3xl card-title">
                            {name}
                            <div className="ml-2 mr-1 badge badge-success">
                                {type}
                            </div>
                            {hireable && (
                                <div className="mx-1 badge badge-info">
                                    hireable
                                </div>
                            )}
                        </h1>
                        <p className='mt-2' >{bio}</p>
                        <div className="mt-4 card-actions">
                            <a href={html_url} target='_blank' rel='noreferrer' className='btn btn-outline'> Visit Github Profile</a>
                        </div>
                    </div>
                    <div className="w-full shadow-md rounded-lg bg-base-100 stats stats-vertical md:stats-horizontal">
                        {location && (
                            <div className="stat">
                                <div className="stat-title text-md">Location</div>
                                <div className="text-lg stat-value">{location}</div>
                            </div>
                        )}
                        {blog && (
                            <div className="stat">
                                <div className="stat-title text-md">Website</div>
                                <div className="text-lg stat-value">
                                    <a 
                                        href= {`https://${splitter(blog)}`}
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        {blog}
                                    </a>
                                </div>
                            </div>
                        )}
                        {twitter_username && (
                            <div className="stat">
                                <div className="stat-title text-md">Twitter</div>
                                <div className="text-lg stat-value">
                                    <a 
                                        href={`https://twitter.com/${twitter_username}`}
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        {twitter_username}
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="w-full rounded-lg shadow-md py-5 mb-6 bg-base-100 stats stats-vertical sm:stats-horizontal">
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaUsers className='text-3xl md:text-5xl'/>
                        </div>
                        <div className="stat-title pr-5">
                            Followers
                        </div>
                        <div className="stat-value pr-5 text-3xl md:text-4xl">{followers}</div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaUserFriends className='text-3xl md:text-5xl'/>
                        </div>
                        <div className="stat-title pr-5">
                            Following
                        </div>
                        <div className="stat-value pr-5 text-3xl md:text-4xl">{following}</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaCodepen className='text-3xl md:text-5xl'/>
                        </div>
                        <div className="stat-title pr-5">
                            Public Repos
                        </div>
                        <div className="stat-value pr-5 text-3xl md:text-4xl">{public_repos}</div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaStore className='text-3xl md:text-5xl'/>
                        </div>
                        <div className="stat-title pr-5">
                            Public Gists
                        </div>
                        <div className="stat-value pr-5 text-3xl md:text-4xl">{public_gists}</div>
                    </div>
                </div>
                <div>
                    <RepoList />
                </div>
        </div>
    )

    return isLoading? loader : content
}

export default User;