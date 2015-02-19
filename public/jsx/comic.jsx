'use strict';
var React = require('react'),
    Router = require('react-router'),
    fetch = require('../../lib/fetch');

var formattedImageSource = function(thumbnailObj) {
    if (thumbnailObj) {
        return `${thumbnailObj.path}.${thumbnailObj.extension}`;
    }
    return "";
};

var Comic = React.createClass({
    mixins: [Router.State],
    getInitialState: function() {
        return {
            comic: {}
        };
    },
    componentWillReceiveProps: function() {
        fetch(`comics/${this.getParams().comicId}`)
            .then((data)=> {
                this.setState({
                    comic: data[0]
                });
            }).catch(function() {
                console.log(arguments);
            });

    },
    render: function() {
        return (
            <div>
                <h1>{this.state.comic.title}</h1>
                <img src={formattedImageSource(this.state.comic.thumbnail)} alt={this.state.comic.title} />
            </div>
        );
    }
});

module.exports = Comic;
