import React, { Component } from 'react'
import DisplayCard from "../../../components/surfaces/DisplayCard"

class Projects extends Component {
    componentDidMount() {
        this.props.fetchProjects()
    }

    render() {
        const { list } = this.props
        const isFetching = this.props.isFetching
        return (
            <div>
                <DisplayCard 
                    list={ list }
                    isFetching={ isFetching }/>
            </div>
        )
    }
}

export default Projects