import React, { Component } from 'react'
import * as go from 'gojs'

class Tree extends Component {

    init() {
        let $ = go.GraphObject.make

        let diagramTree = $(go.Diagram, 'DiagramTree', 
            {
                'undoManager.isEnabled': true,
                initialContentAlignment: go.Spot.Left,
                isReadOnly: true
            }
        )
        
        // Define the diagram's layout type 
        diagramTree.layout = $(go.TreeLayout, 
            {
                arrangement: go.TreeLayout.ArrangementHorizontal,
                angle: 0, // Display tree horizontally
                layerSpacing: 35, 
            }
        )
        
        // Define settings for the diagram's node
        diagramTree.nodeTemplate = $(go.Node, 'Auto',
            $(go.Shape, 
                'RoundedRectangle',
                { stroke: "#ffffff", fill: 'green', height: 60, width: 100 },
                { portId: "", fromLinkable: true, toLinkable: true, cursor: "pointer" }
            ),
            $(go.Panel, 
                'Horizontal',
                $(go.TextBlock,
                    {
                        font:  "bold 12pt Roboto",
                        stroke: "white",
                        editable: false, 
                        isMultiline: true, 
                    },
                    new go.Binding('text', 'name').makeTwoWay()
                )
            )
        )

        // Define settings for diagram's link
        diagramTree.linkTemplate = $(go.Link, 
            { toShortLength: 6, toEndSegmentLength: 20 },
            $(go.Shape, { strokeWidth: 2 , stroke: "rgba(64, 128, 255, 0.8)"}),
            $(go.Shape, { toArrow: "Triangle", fill: "rgba(64, 128, 255, 0.8)", stroke: "rgba(64, 128, 255, 0.8)", scale: 1 })
        )

        // Define diagram's model type
        let diagramModel = $(go.GraphLinksModel)
        // Pass data to diagram model's node array
        diagramModel.nodeDataArray = [{ name: 'Wingman', key: '1'}, {name: 'Orphaned', key: '2'}]
        // Pass data to diagram model's link array
        diagramModel.linkDataArray = [{from: 1, to: 2}]
        // Assign diagram with the model data
        diagramTree.model = diagramModel
    }
    componentDidMount() {
        this.init()
    }
    render() {
        return (
            <div id="DiagramTree" style={{ width:600, height:550 }}></div>
        )
    }
}

export default Tree