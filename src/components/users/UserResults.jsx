import { useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'
import loaderImg from '../assets/loader.gif'
import UserItem from './UserItem'
function UserResults() {
    const {isLoading} = useContext(GithubContext)

    const loader = (<div className='hero'>
        <img style={{width: 'min(25vw, 12rem)', borderRadius:'15rem'}} src={loaderImg} alt='' />
    </div>)

    const content = (<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-8'>
        <UserItem />
    </div>)

    return isLoading ? loader : content
}

export const loader = (<div className='hero'>
<img style={{width: 'min(25vw, 12rem)', borderRadius:'15rem'}} src={loaderImg} alt='' />
</div>)

export default UserResults;