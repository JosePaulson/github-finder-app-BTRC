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
        case 'GET_USER_AND_REPOS':
            return {
                ...state,
                user: action.payload.user,
                repos: action.payload.repos,
                isLoading: false
            }
        default:
            return state
    }
}

export default GithubReducer