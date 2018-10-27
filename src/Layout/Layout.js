import React, { Component } from 'react';
import Navigation from './Navigation/Navigation';
import './Layout.scss';
class Layout extends Component {
    render() {
        return (
            <div className="layout">
                <Navigation />
                {this.props.children}
            </div>
        );
    }
}

export default Layout;