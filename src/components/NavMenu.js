import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navmenu extends Component {
    render() {
        return (
            <li id={this.props.item}>
                <Link to={this.props.tolink} onClick={this.props.activec.bind(this, this.props.item)}> {this.props.item}</Link> 
            </li>
        )
    }
}

export default Navmenu;
// Compare this snippet from my-profile/src/components/navbar.js: