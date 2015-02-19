'use strict';
var {queryString} = require("../lib/util");
var route = "http://gateway.marvel.com/v1/public";
var request = require("request");

var params = `?${queryString}`;

module.exports = function find(type, id, cb) {
    var findRoute = `${route}/${type}/${id}`;
    request(findRoute + params, function(err, response, data) {
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
