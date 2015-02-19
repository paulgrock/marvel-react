'use strict';

var React = require('react'),
    ComicListItem = require('./comicListItem.jsx'),
    fetch = require('../../lib/fetch'),
    {RouteHandler} = require('react-router');

var ComicList;

module.exports = React.createClass({
    propTypes: {
        comics: React.PropTypes.array
    },
    getInitialState: function () {
        return {
            comics: []
        };
    },
    componentWillMount: function () {
        if (this.props.data) {
            this.setState({
                comics: this.props.data.comics
            });
        }
    },
    componentDidMount: function () {
        fetch('comics')
        .then((data)=>{
            this.setState({
                comics: data
            });
        }).catch(function(){
            console.log(arguments);
        });
    },
    render: function() {
        ComicList = this.state.comics.map((comic)=> {
            return <ComicListItem key={comic.id} comic={comic} />
        });
        return (
            <div>
                <ul>
                    {ComicList}
                </ul>
                <RouteHandler/>
            </div>
        );
    }
});
