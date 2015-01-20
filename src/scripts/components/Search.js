'use strict';

var React   = require('react');

var Search = React.createClass({
  
  getInitialState: function() {
    return {
      value: ''
    };
  },

  render: function() {
    return (
      <div id='searchBar'>
        <input type='text' placeholder='find a space to work'></input>
      </div>
    );
  }
});

module.exports = Search;