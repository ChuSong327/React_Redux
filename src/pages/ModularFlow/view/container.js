import { connect } from 'react-redux'
import ModularFlow from './ModularFlow'
import * as action from '../actions'


export const mapStateToProps = state => {
    
}

export const mapDispatchToProps = dispatch => {
    return {
        fetchModules: () => dispatch(action.fetchModulesList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModularFlow)