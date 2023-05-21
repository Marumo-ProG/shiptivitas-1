import React from 'react';
import { ReactDOM } from 'react-dom';
import './Card.css';
import Dragula from 'dragula';
import { findDOMNode } from 'react-dom';

export default class Card extends React.Component {
  componentDidMount(){
    var board = findDOMNode(this);
    Dragula([board]);
  }
  render() {
    let className = ['Card'];
    if (this.props.status === 'backlog') {
      className.push('Card-grey');
    } else if (this.props.status === 'in-progress') {
      className.push('Card-blue');
    } else if (this.props.status === 'complete') {
      className.push('Card-green');
    }
    return (
        <div className={className.join(' ')} data-id={this.props.id} data-status={this.props.status}>
          <div className="Card-title">{this.props.name}</div>
        </div>
    );
  }
  
  
}