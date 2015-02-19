'use strict';


var characterModel = require('../models/characters'),
    handleRoute = require('../public/js/handleRoute');

module.exports = function (router) {
    router.get('/', function (req, res, next) {

        characterModel.findAll(undefined, function(err, model) {
            if (err) {
                return next(err);
            }
            res.format({
                html: function() {
                    handleRoute(req, res, {
                        characters: model.data.results
                    });
                },
                json: function() {
                    res.json(model);
                }
            })
        });


    });

};
