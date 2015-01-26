'use strict';

var React   = require('react');

var Search = React.createClass({
  
  getInitialState: function() {
    return {
      query: ''
    };
  },

  logQuery: function() {
      var searchInput = (this.refs['searchInput'].getDOMNode().value);
      this.setState({ query: searchInput });
      console.log("query state is: " + this.state.query);
  },

  render: function() {
    return (
      <div id='searchBar'>
        <form>
          <input onKeyDown={this.logQuery} ref="searchInput" placeholder="find a space to work" />
          <input type="hidden" name="lat" value="" id="lat" />
          <input type="hidden" name="lng" value="" id="lng" />
        </form>
      </div>
    );
  }
});

module.exports = Search;