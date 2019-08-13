import * as type from './actionTypes'
// This list will be replaced by data retrieved from server later on
const list = [
    {
        id: 'nebular',
        version: 'v1',
        name: 'Nebula',
        description:' Nebula is an application that...',
       
    }, 
    {
        id: 'oneview',
        version: "v1",
        name: 'OneView',
        description: 'OneView is an application that...',
    },
    {   
        id: 'myaccount',
        version: 'v1',
        name: 'MyAccount',
        description: 'MyAccount is an application that...'
    },
    {
        id: 'omni_portal',
        version: 'v1',
        name: 'OmniPortal',
        description: 'OmniPortal is an application that...'
    }
]

/** Action to inform the app an API request is starting and display the progress spinner on UI*/
export function requestProjects(isFetching) {
    return {
        type: type.REQUEST_PROJECTS,
        isFetching
    }
}

/** Action to inform the app result from API request has been received and provide the result */
export function receiveProjects(isFetching, list) {
    return {
        type: type.RECEIVE_PROJECTS,
        isFetching,
        list
    }
}

/** Async action creator that -  
 * first, informs the app that an API call has been triggered. Reducer will set isFetching to true so that progress spin will be displayed 
 * then, updates the state with results returned from the API call (API call will be developed later)
 */
export function fetchProjects() {
    return function(dispatch) {
        dispatch(requestProjects(true))
        return dispatch(receiveProjects(false, list))
    }
}