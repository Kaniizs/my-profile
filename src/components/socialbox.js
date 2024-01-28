import React, { Component } from 'react';
import '../css/social.css';

class socialbox extends Component {
    render() {
        return (
            <div className="socialcard">
                <p><i className={this.props.icon}></i> : {this.props.info}</p>
            </div>
        )
    }
}

export default socialbox;