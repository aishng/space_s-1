'use strict';

var React   = require('react');

var Map = React.createClass({
  
  getInitialState: function() {
    return {
      value: ''
    };
  },

  render: function() {
    return (
      <div id='map'>
        INSERT MAP HERE
      </div>
    );
  }
});

module.exports = Map;