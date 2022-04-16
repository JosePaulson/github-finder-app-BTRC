import {Link} from 'react-router-dom'
import {FaHome} from 'react-icons/fa'
function NotFound() {
    return (
        <div className="hero">
            <div className="text-center">
                <h1 className="text-8xl font-bold">404</h1>
                <p className="text-2xl">Page not found!</p>
                <Link to='/' className='btn btn-primary btn-lg mt-6'>
                    <FaHome className='mr-2'/>
                    Back to home
                </Link>
            </div>
        </div>
     );
}

export default NotFound;