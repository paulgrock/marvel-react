'use strict';
var React = require('react'),
    Router = require('react-router'),
    fetch = require('../../lib/fetch'),
    ComicSubList = require('./comicSubList.jsx');

var formattedImageSource = function(thumbnailObj) {
    if (thumbnailObj) {
        return `${thumbnailObj.path}.${thumbnailObj.extension}`;
    }
    return '';
};

var Character = React.createClass({
    mixins: [Router.State],
    getInitialState: function() {
        return {
            character: {
                comics: []
            }
        };
    },
    componentWillReceiveProps: function() {
        var charId = this.getParams().characterId;
        fetch(`characters/${charId}`)
            .then((data)=> {
                this.setState({
                    character: data[0]
                });
            }).catch(function() {
                console.log(arguments);
            });
    },
    render: function() {
        return (
            <div>
                <h1>{this.state.character.name}</h1>
                <img src={formattedImageSource(this.state.character.thumbnail)} alt={this.state.character.name} />
                <p>As seen in:</p>
                <ComicSubList comics={this.state.character.comics} />
            </div>
        );
    }
});

module.exports = Character;
