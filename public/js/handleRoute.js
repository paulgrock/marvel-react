var React = require('react'),
    Router = require('react-router'),
    routes = require('../jsx/routes.jsx'),
    Html = require('../jsx/main.jsx');

module.exports = function(req, res, model) {
    Router.run(routes, req.originalUrl, function(Handler, state) {
        var markup = React.renderToString(<Handler data={model}/>);
        var html = React.renderToStaticMarkup(<Html markup={markup} title="server rendered" />);
        console.log(html);
        res.send(html);
    });
}
