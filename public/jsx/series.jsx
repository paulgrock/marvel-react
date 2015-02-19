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

module.exports = React.createClass({
    mixins: [Router.State],
    getInitialState: function() {
        return {
            series: {}
        };
    },
    componentWillReceiveProps: function() {
        fetch(`series/${this.getParams().seriesId}`)
            .then((data)=> {
                this.setState({
                    series: data[0]
                });
            }).catch(function() {
                console.log(arguments);
            });

    },
    render: function() {
        return (
            <div>
                <h1>{this.state.series.title}</h1>
                <img src={formattedImageSource(this.state.series.thumbnail)} alt={this.state.series.title} />
            </div>
        );
    }
});
