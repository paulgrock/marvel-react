'use strict';
var React = require('react'),
    ListItem = require('./comicListItem.jsx');

var ComicSubList = React.createClass({
    render: function () {
        if (this.props.comics && this.props.comics.items) {
            var listItem = this.props.comics.items.map((comic)=>{
                var id = comic.resourceURI.split('/');
                id = id[id.length - 1];
                var comicObj = {
                    title: comic.name,
                    id: id
                };
                return <ListItem comic={comicObj} key={id} />;
            });
        }
        return (
            <ul>
                {listItem}
            </ul>
        );
    }
});

module.exports = ComicSubList;
