import * as type from './actionTypes'

const initialState = {
    list: [],
    isFetching: true
}
const reducer = (state = initialState, action) => {
    switch(action.type) {
        // API request is starting, update the state to display progress spinner/bar on UI
        case type.REQUEST_PROJECTS: 
            return Object.assign({}, state, {isFetching: action.isFetching})
        // API result is received, update the state with received result and hide progress spinner/bar on UI
        case type.RECEIVE_PROJECTS: 
            return Object.assign({}, state, {list: action.list, isFetching: action.isFetching})
        default: 
            return state
    }
}

export default reducer