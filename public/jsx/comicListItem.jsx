'use strict';
var React = require('react');
let {Link} = require('react-router');

module.exports = React.createClass({
    render: function() {
        var comic = this.props.comic;
        return (
            <li>
                <Link to="comic" params={{comicId: comic.id}}>{comic.title}</Link>
            </li>
        );
    }
});
