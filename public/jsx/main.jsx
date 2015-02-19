'use strict';

var React = require('react');

let HTML = React.createClass({
    render: function() {
        return (
            <html>
                <head>
                    <meta charset="utf-8" />
                    <title></title>
                    <link rel="stylesheet" href="/css/app.css" />
                </head>
                <body>
                    <div id="wrapper" class="content" dangerouslySetInnerHTML={{__html: this.props.markup}}></div>
                    // <script src="/js/app.min.js"></script>
                </body>
            </html>
        );
    }
});

module.exports = HTML;
