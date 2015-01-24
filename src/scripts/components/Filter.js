'use strict';

var React   = require('react');

var Filter = React.createClass({
  
  // getInitialState: function() {
  //   return {
  //     value: true
  //   };
  // },

  // handleClick: function (e) {
  //   if (this.state.value === true) {
  //     this.setState({value: false });
  //   } 
  //   console.log(this.state.value);
  // },

  render: function() {
    return (
      <div id='filter'>
        <input type='checkbox'>
          <label> {this.props.filter} </label>
        </input>
      </div>
    );
  }
});

module.exports = Filter;