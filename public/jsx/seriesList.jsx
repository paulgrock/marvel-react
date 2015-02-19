'use strict';
var React = require('react'),
    SeriesListItem = require('./seriesListItem.jsx'),
    fetch = require('../../lib/fetch'),
    {RouteHandler} = require('react-router');


var seriesList = {};

module.exports = React.createClass({
    componentWillMount: function () {
        if (this.props.data) {
            this.setState({
                series: this.props.data.series
            });
        }
    },
    componentDidMount: function () {
        fetch('series')
        .then((data)=>{
            this.setState({
                series: data
            });
        }).catch(function(){
            console.log(arguments);
        });
    },
    render: function() {
        if(this.state && this.state.series) {
            seriesList = this.state.series.map((series)=> {
                return <SeriesListItem key={series.id} series={series} />
            });
        }
        return (
            <div>
                <ul>
                    {seriesList}
                </ul>
                <RouteHandler />
            </div>
        );
    }
});
