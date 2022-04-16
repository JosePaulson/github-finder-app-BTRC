const GithubReducer = (state, action) => {
    switch(action.type){
        case 'SEARCH_USER':
            return {
                ...state,
                users: action.payload,
                isLoading: false
            }
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: true
            }
        case 'CLEAR_SEARCH':
            return {
                ...state,
                users: []
            }
        case 'GET_USER':
            return {
                ...state,
                user: action.payload,
                isLoading: false
            }
        case 'GET REPOS':
            return {
                ...state,
                repos: action.payload
            }
        default:
            return state
    }
}

export default GithubReducer