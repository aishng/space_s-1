var SpaceSApp = require('./SpaceSApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('main');

var Routes = (
  <Route handler={SpaceSApp}>
    <Route name="/" handler={SpaceSApp}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
