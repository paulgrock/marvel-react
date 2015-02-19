'use strict';
var React = require('react'),
    Router = require('react-router'),
    CharList = require('../jsx/charList.jsx'),
    ComicList = require('../jsx/comicList.jsx'),
    SeriesList = require('../jsx/seriesList.jsx'),
    Comic = require('../jsx/comic.jsx'),
    Character = require('../jsx/character.jsx'),
    Series = require('../jsx/series.jsx');

let {DefaultRoute, Link, Route, RouteHandler} = Router;

var Nav = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Hi, </h1>
                <nav>
                    <ul>
                        <li><Link to="characters">Characters</Link></li>
                        <li><Link to="comics">Comics</Link></li>
                        <li><Link to="serieses">Series</Link></li>
                    </ul>
                </nav>
                <RouteHandler  {...this.props} />
            </div>
        );
    }
});

let routes = (
    <Route name="app" path="/" handler={Nav}>
        <Route name="characters" handler={CharList}>
            <Route name="character" path=":characterId" handler={Character} />
        </Route>
        <Route name="comics" handler={ComicList}>
            <Route name="comic" path=":comicId" handler={Comic} />
        </Route>
        <Route name="serieses" path="series" handler={SeriesList}>
            <Route name="series" path=":seriesId" handler={Series} />
        </Route>
        <DefaultRoute handler={CharList} />
    </Route>
);

module.exports = routes;
