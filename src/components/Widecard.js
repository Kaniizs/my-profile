// Widecard.js
import React, { Component } from 'react';

class Widecard extends Component {
    render() {
        return (
            <div className="widecard">
                <img src={this.props.image} alt={`${this.props.title} Image`} className="icon" />
                <div className="compdet">
                    <h3>{this.props.title}</h3>
                    <h4 className="secondtext">{this.props.where}</h4>
                    <h4 className="secondtext">{this.props.from} - {this.props.to}</h4>
                    <h4 className="secondtext">GPA: {this.props.gpa}</h4>
                </div>
            </div>
        );
    }
}

export default Widecard;
