import React, { Component } from 'react'

const container = {
    display:"flex",
    flexFlow: 'column',
    height: '90%'
};

export default class Rules extends Component {
    render() {
        return (
            <div className="container w3-padding-64" style={container}>
                <h1 className="display-1">Rules</h1>
                <span> &nbsp;</span>
                <ul>
                    <h3><li>Nocheating</li></h3>
                </ul>                
            </div>
        )
    }
}
