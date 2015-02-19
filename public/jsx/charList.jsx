'use strict';
var React = require('react'),
    CharList = require('./charListItem.jsx'),
    fetch = require('../../lib/fetch'),
    {RouteHandler} = require('react-router');

let Characters = React.createClass({
    propTypes: {
        characters: React.PropTypes.array
    },
    getInitialState: function () {
        return {
            characters: []
        };
    },
    componentWillMount: function () {
        if (this.props.data) {
            this.setState({
                characters: this.props.data.characters
            });
        }
    },
    componentDidMount: function () {
        fetch('characters')
        .then((data)=>{
            this.setState({
                characters: data
            });
        }).catch(function(){
            console.log(arguments);
        });
    },
    render: function() {
        var CharacterList = this.state.characters.map((character) => {
            return <CharList key={character.id} character={character} />
        });
        return (
            <div>
                <ul>
                    {CharacterList}
                </ul>
                <RouteHandler />
            </div>
        );
    }
});

module.exports = Characters;
