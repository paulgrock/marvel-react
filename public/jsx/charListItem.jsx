'use strict';
var React = require('react'),
    {Link} = require('react-router');

var alertName = function(e) {
    e.preventDefault();
    console.log(e.currentTarget);
};

let charList = React.createClass({
    render: function() {
        var character = this.props.character;
        return (
            <li>
                <Link to="character" params={{characterId: character.id}}>{character.name}</Link>
            </li>
        );
    }
});

module.exports = charList;
