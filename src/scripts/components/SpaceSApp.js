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

  getFilters: function() {
    return [
      {
        filterLabel : "Has Wifi"
      },
      { 
        filterLabel : "Is Open Now"
      }
      // {
      //   filterLabel : "Less than 1 mile away"
      // }
    ];
  },

  handleFilterClick: function (e) {
    if (this.state.value === true) {
      this.setState({value: false });
    } 
    console.log(this.state.value);
  },

  render: function() {
    var data = this.getFilters();

    var filters = data.map(function(filter) {
      return <Filter onClick={this.handleFilterClick} filter={filter.filterLabel} />
    });

    return (
      <div id='app'>
        HELLO
        {filters}
        <Search />
        <Map />
        <Result />
      </div>
    );
  }
});

module.exports = SpaceSApp;
