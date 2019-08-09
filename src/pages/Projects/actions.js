import * as type from './actionTypes'

export function requestProjects(isFetching) {
    return {
        type: type.REQUEST_PROJECTS,
        isFetching
    }
}

export function receiveProjects(isFetching, list) {
    return {
        type: type.RECEIVE_PROJECTS,
        isFetching,
        list
    }
}
const list = [
    {
        name: "Nebula",
        description: "Nebula is an application that..."
    }, 
    {
        name: "OneView",
        description: "OneView is an application that..."
    }
]
export function fetchProjects() {
    return function(dispatch) {
        dispatch(requestProjects(true))
        return dispatch(receiveProjects(false, list))
    }
}