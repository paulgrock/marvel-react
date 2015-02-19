'use strict';
var {queryString} = require("../lib/util");
var comicsRoute = "http://gateway.marvel.com/v1/public/";
var qs = require("querystring");
var request = require("request");

var params = `?${queryString}`;

module.exports = function findAllComics(type, query, cb) {
    var query = query || {};
    var page = query.page || 1;
    var marvelQuery = {
        offset: (page - 1) * 20
    }
    var queryParams = qs.stringify(marvelQuery) ? "&" + qs.stringify(marvelQuery) : null;
    request(comicsRoute + type + params + queryParams, function(err, response, data) {
        if (err) {
            return cb(err);
        }
        try {
            data = JSON.parse(data);
            return cb(null, data);
        } catch (e) {
            return cb(e)
        }
    });
};
