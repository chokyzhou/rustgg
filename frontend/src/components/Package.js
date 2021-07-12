import React, { Component } from 'react';

import NavWrapper from './layout/NavWrapper';
import PackageWrapper from './layout/PackageWrapper';
import FootWrapper from './layout/FootWrapper';

const divStyle = {
    color: 'blue',
};

export default class Package extends Component {
    render() {
        return (
            <div className ="react" id="ReactWrapper" style={divStyle}>
                <NavWrapper />
                <PackageWrapper />
                <FootWrapper />
            </div>
        )
    }
}

