import PropTypes from 'prop-types'
import { FaLink, FaEye, FaStar, FaUtensils, FaInfo} from 'react-icons/fa'
function RepoItem({repo}) {
    const {
        name,
        description,
        html_url,
        forks,
        open_issues,
        watchers_count,
        stargazers_count
    } = repo
    return ( 
        <div className='mb-2 card rounded-md bg-gray-800 hover:bg-gray-900'>
            <div className="card-body">
                <h3 className="font-semi-bold card-title mb-2 text-xl">
                    <a href={html_url}>
                        <FaLink className='mr-1'/>
                    </a>
                    {name}
                </h3>
                <p className="mb-3">{description}</p>
                <div className="flex">
                    <div className="mr-2 badge badge-info badge-lg opacity-70">
                        <FaEye className='mr-1'/>
                        {watchers_count}
                    </div>
                    <div className="mr-2 badge badge-success badge-lg opacity-70">
                        <FaStar className='mr-1'/>
                        {stargazers_count}
                    </div>
                    <div className="mr-2 badge badge-error badge-lg opacity-70">
                        <FaInfo className='mr-1'/>
                        {open_issues}
                    </div>
                    <div className="mr-2 badge badge-warning badge-lg opacity-70">
                        <FaUtensils className='mr-1'/>
                        {forks}
                    </div>
                </div>
            </div>
        </div>
     );
}

RepoItem.propTypes = {
    repo: PropTypes.object.isRequired
}

export default RepoItem;