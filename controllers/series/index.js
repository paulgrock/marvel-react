'use strict';

var seriesModel = require('../../models/series'),
    handleRoute = require('../../public/js/handleRoute');

module.exports = function (router) {
    router.get('/', function (req, res, next) {
        seriesModel.findAll(undefined, function(err, model) {
            if (err) {
                return next(err);
            }
            res.format({
                html: function() {
                    handleRoute(req, res, {
                        series: model.data.results,
                        attributionHTML: model.attributionHTML
                    });
                },
                json: function() {
                    res.json(model);
                }
            })
        });
    });

    router.get('/:seriesId', function(req, res, next) {
        var seriesId = req.params.seriesId;
        console.log(req.params);
        seriesModel.find(seriesId, function(err, model) {
            if (err) {
                return next(err);
            }
            res.format({
                html: function() {
                    handleRoute(req, res, {
                        series: model.data.results[0],
                        attributionHTML: model.attributionHTML
                    });
                },
                json: function() {
                    res.json(model);
                }
            })
        });
    })

};
