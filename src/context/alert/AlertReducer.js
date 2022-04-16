const AlertReducer = (state, action) => {
    switch(action.type){
        case 'SET_ALERT' :
            return {
                switch: true,
                msg: action.payload.msg,
                type: action.payload.type
            }
        case 'REMOVE_ALERT' :
            return {
                ...state,
                switch: false
            }
        default:
            return state
    }
}

export default AlertReducer