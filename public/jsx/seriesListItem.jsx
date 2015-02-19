'use strict';
var React = require('react');
let {Link} = require('react-router');

module.exports = React.createClass({
    render: function() {
        var series = this.props.series;
        return (
            <li>
                <Link to="series" params={{seriesId: series.id}} query={{year: 2001}}>{series.title}</Link>
            </li>
        );
    }
});
