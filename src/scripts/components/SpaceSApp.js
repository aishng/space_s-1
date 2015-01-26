'use strict';

var React   = require('react/addons'),
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
      // venueType: "cafe",
      //start with a place that has wifi
      wifi: true,
      //and is open
      open: true
      // distance: less than 5 miles, etc
    } );
  },

  handleWifiClick: function (e) {
    //wifi starts as true - i need wifi
    if (this.state.wifi === false) {
      //i need wifi, my box is unchecked
      this.setState({ wifi: true });
    } else {
      //i don't need wifi, my box is checked
      this.setState({ wifi: false });
    }
  },

  handleOpenClick: function (e) {
    //open starts as true - i need somewhere that is open
    if (this.state.open === false) {
      //i need it somewhere that is open right now, my box is unchecked
      this.setState({ open: true });
    } else {
      //i dont care if its open, box is checked
      this.setState({ open: false });
    }
  },

  render: function() {
    return (
      <div id='app'>
        <strong>Displaying space_s that are open and have wifi below:</strong>
        <div id='wififilter'>
          <input onClick={this.handleWifiClick} type='checkbox'><label>I do not need Wifi</label>
          </input>
        </div>
        <div id='openfilter'>
          <input onClick={this.handleOpenClick} type='checkbox'><label>It does not need to be open now</label>
          </input>
        </div>
        <Search />
        <Map />
        <Result />
      </div>
    );
  }
});

module.exports = SpaceSApp;

