import React, { Component } from 'react';

class Projectcard extends Component {
  render() {
    return (
        <div className="Projectcard">
          <img src={this.props.image} alt={`${this.props.title} Image`} className="icon" />
          <div className="compdet">
            <h2>{this.props.title}</h2>
            <h3 className="secondtext">{this.props.role}</h3>
            <h4 className='secondtext'>{this.props.desc}</h4>
          </div>
        </div>
    );
  }
}

export default Projectcard;
