'use strict';

var React   = require('react/addons'),
    Filter  = require('./Filter'),
    Search  = require('./Search'),
    Map     = require('./Map'),
    Result  = require('./Result');


// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require('../../styles/normalize.css');
require('../../styles/main.css');

var SpaceSApp = React.createClass({

  getInitialState: function() {
    return ( {
      venueType: "cafe",
      wifi: true,
      open: true
      // distance: less than 5 miles, etc
    } );
  },

  render: function() {
    return (
      <div id='app'>
        HELLO
        <Filter />
        <Search />
        <Map />
        <Result />
      </div>
    );
  }
});

module.exports = SpaceSApp;
