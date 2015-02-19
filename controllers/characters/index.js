'use strict';


var characterModel = require('../../models/characters'),
    handleRoute = require('../../public/js/handleRoute');

module.exports = function (router) {
    router.get('/', function (req, res, next) {
        characterModel.findAll(undefined, function(err, model) {
            if (err) {
                return next(err);
            }
            res.format({
                html: function() {
                    handleRoute(req, res, {
                        characters: model.data.results,
                        attributionHTML: model.attributionHTML
                    });
                },
                json: function() {
                    res.json(model);
                }
            })
        });
    });

    router.get('/:characterId', function(req, res, next) {
        var characterId = req.params.characterId;
        characterModel.find(characterId, function(err, model) {
            if (err) {
                return next(err);
            }
            res.format({
                html: function() {
                    handleRoute(req, res, {
                        character: model.data.results[0],
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
