import { connect } from 'react-redux'
import Projects from './Projects'
import * as action from '../actions'

export const mapStateToProps = state => {
   return {
       list: state.projects.list,
       isFetching: state.projects.isFetching
   }
}

export const mapDispatchToProps = dispatch => {
    return {
        fetchProjects: () => dispatch(action.fetchProjects())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects)