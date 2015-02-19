'use strict';

var React = require('react'),
    Router = require('react-router'),
    routes = require('../jsx/routes.jsx');

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler />, document.body);
});
