'use strict';

describe('Main', function () {
  var React = require('react/addons');
  var SpaceSApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    SpaceSApp = require('../../../src/scripts/components/SpaceSApp.js');
    component = React.createElement(SpaceSApp);
  });

  it('should create a new instance of SpaceSApp', function () {
    expect(component).toBeDefined();
  });
});
