'use strict';


var comicsModel = require('../../models/comics'),
    handleRoute = require('../../public/js/handleRoute');


module.exports = function (router) {
    router.get('/', function (req, res, next) {
        comicsModel.findAll(undefined, function(err, model) {
            if (err) {
                return next(err);
            }
            res.format({
                html: function() {
                    handleRoute(req, res, {
                        comics: model.data.results,
                        attributionHTML: model.attributionHTML
                    });
                },
                json: function() {
                    res.json(model);
                }
            })
        });
    });

    router.get('/:comicId', function(req, res, next) {
        var comicId = req.params.comicId;
        comicsModel.find(comicId, function(err, model) {
            if (err) {
                return next(err);
            }
            res.format({
                html: function() {
                    handleRoute(req, res, {
                        comic: model.data.results[0],
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
