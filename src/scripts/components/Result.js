'use strict';

var React   = require('react');

var Result = React.createClass({
  
  getInitialState: function() {
    return {
      value: ''
    };
  },

  render: function() {
    return (
      <div id='result'>
        INSERT RESULT HERE
      </div>
    );
  }
});

module.exports = Result;