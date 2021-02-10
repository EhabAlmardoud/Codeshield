import React, { Component } from 'react'
import './style.css'
import { map, get } from 'lodash'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { v4 as uuidv4 } from 'uuid';

const dummyComments = {
    'c1': { text: 'Comment1', id: '1' },
    'c2': { text: 'Comment2', id: '2' },
    'c3': { text: 'Comment3', id: '3' }
}

export default class NodeComp extends Component {

    constructor(props) {
        super(props);
        this.state = { replies: {}, temp: {} };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    state = { replies: {}, temp: {} }

    handleChange = (event) => {
        this.setState({ temp: { ...this.state.temp, 'r1': get(event, 'target.value') } });
    }

    handleSubmit = (id) => {
        this.setState({ replies: { ...this.state.replies, 'r1': { text: this.state.temp.r1, parent: id } } });
    }

    renderComments = (comments, nodeid) => {
        if (nodeid === '1' || nodeid === '3') {
            return map(comments, (c) => {
                return <Popup trigger={
                    <div className='comment_div'>
                        <div>{c.text}</div>
                        <div>{this.renderRepiles}</div>
                    </div>
                } position="right center"
                >
                    <input onChange={this.handleChange} />
                    <button className='info_div' onClick={() => this.handleSubmit(c.id)}>Submit</button>
                </Popup>

            })
        }
    }

    renderRepiles = () => {
        console.log('here')
        return map(this.state.replies, (r)=>{
            return <div>{r.text}sadsad</div>
        })
    }

    render() {
        const { node } = this.props
        return (
            <div>

                <div className='node_cont'>
                    <div className='photo'>{node.logicalId.charAt(0)}</div>
                    <div className='info_div'>
                        <div>{node.resourceType}</div>
                        <div>{node.logicalId}</div>
                    </div>
                </div>
                <div>
                    {this.renderComments(dummyComments, node.id)}
                </div>
            </div>
        )
    }
}
