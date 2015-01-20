'use strict';

var React   = require('react');

var Filter = React.createClass({
  
  getInitialState: function() {
    return {
      value: ''
    };
  },

  render: function() {
    return (
      <div id='filter'>
        <input type='checkbox' placeholder={ this.props.filter }>FILTER</input>
      </div>
    );
  }
});

module.exports = Filter;