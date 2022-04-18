import { createContext, useReducer} from "react";
import GithubReducer from "./GithubReducer";


const GithubContext = createContext()

export const GithubProvider = ({children}) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        isLoading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState)
    
    // async function fetchUsers() {
    //     dispatch({
    //         type: 'SET_LOADING'
    //     })
    //     const response = await fetch(`${GITHUB_URL}/users`, {
    //         headers: {
    //             Authorization: `token ${GITHUB_TOKEN}`
    //         }
    //     })
    //     const data = await response.json()

    //     dispatch({
    //         type: 'GET_USERS',
    //         payload: data
    //     })

    // }

    // async function getUser (login) {
    //     dispatch({
    //         type: 'SET_LOADING'
    //     })
    //     const response = await fetch(`${GITHUB_URL}/users/${login}`, {
    //         headers: {
    //             Authorization: `token ${GITHUB_TOKEN}`
    //         }
    //     })

    //     if(response.status === 404){
    //         window.location = '/notfound'
    //     }
    //     else{
    //         const data = await response.json()
    //         dispatch({
    //             type: 'GET_USER',
    //             payload: data
    //         })
    //     }
    // }

    // async function searchUsers(user){

    //     dispatch({
    //         type: 'SET_LOADING'
    //     })

    //     // const params = new URLSearchParams({
    //     //     q: user
    //     // })

    //     const response = await fetch(`${GITHUB_URL}/search/users?q=${user}`, {
    //         headers: {
    //             Authorization: `token ${GITHUB_TOKEN}`
    //         }
    //     })

    //     const {items} = await response.json()

    //     dispatch({
    //         type: 'SEARCH_USER',
    //         payload: items
    //     })
    // }

    // async function getRepos(login) {
    //     const response = await fetch(`${GITHUB_URL}/users/${login}/repos`)
    //     const data = await response.json()

    //     dispatch({
    //         type: 'GET REPOS',
    //         payload: data
    //     })

    // }

    return <GithubContext.Provider value={{
        ...state,
        dispatch
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext    