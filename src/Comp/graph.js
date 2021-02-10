import React, { Component } from 'react'
import { Graph } from "react-d3-graph";
import dataJSON from './../Data/graph.json'
import NodeComp from './node'

const data = {
    nodes: [...dataJSON.nodes],
    links: [...dataJSON.edges],
};


const myConfig = {
    nodeHighlightBehavior: true,
    staticGraphWithDragAndDrop: false,
    node: {
        color: "lightgreen",
        size: {
            height: 500,
            width: 1000,
        },
        renderLabel: false,
        highlightStrokeColor: "blue",
        viewGenerator: node => {
            return (
                <NodeComp node={node} />
            );
        }
    },
    link: {
        highlightColor: "lightblue",
        renderLabel: true,
        labelProperty: 'referenceType'
    },
};

export default class GraphCon extends Component {
    render() {
        return (
            <div>
                <Graph
                    id="graph-id" // id is mandatory
                    data={data}
                    config={myConfig}
                // onClickNode={onClickNode}
                // onClickLink={onClickLink}
                />;
            </div>
        )
    }
}
