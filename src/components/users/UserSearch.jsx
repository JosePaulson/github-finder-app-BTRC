import { useState, useContext} from 'react'
import GithubContext from '../../context/github/GithubContext'
import { searchUsers } from '../../context/github/GithubActions'
import AlertContext from '../../context/alert/AlertContext'
import SearchAlert from '../alert/SearchAlert'
function UserSearch() {

    const {dispatch} = useContext(GithubContext)

    const {state, setAlert} = useContext(AlertContext)

    const [text, setText] = useState('')

    function handleChange(e) {
        setText(e.target.value)
    }

    function handleClick() {
        setText('')
        dispatch({type: 'CLEAR_SEARCH'})
    }

    async function handleSubmit(e) {
        const msg = 'Enter some text to search'
        e.preventDefault()
        if (text.trim() === '') {
            setAlert(msg, 'warning')
        }else {
            dispatch({type: 'SET_LOADING'})
            const data = await searchUsers(text)
            dispatch({
                type:'SEARCH_USER',
                payload: data
            })
            setText('')
        }

    }

    return ( 
        <div className="flex justify-center">
            <div className='flex-row'>
                {state.switch ? <SearchAlert msg={state.msg}/> : null}
                <form 
                    className="form-control"
                    onSubmit={handleSubmit}
                >
                    <div className="flex">
                        <input
                            type="text"
                            className="bg-gray-200 rounded rounded-r-none input sm:input-lg text-black focus:outline-none"
                            placeholder="Search"
                            onChange={handleChange}
                            value={text}
                        />
                        <button
                            className="btn sm:btn-lg top-0 right-0 rounded-l-none w-[7rem] sm:w-36 focus:outline-none"
                            type="submit"
                        >
                            go
                        </button>
                    </div>
                </form>
                <div className='flex mt-4'>
                    <button 
                        className="btn btn-lg btn-ghost"
                        onClick={handleClick}
                    >
                        Clear
                    </button>
                </div>
            </div>
        </div>
     );
}

export default UserSearch;