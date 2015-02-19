'use strict';
var findAll = require("./findAll");
var find = require("./find");

exports.findAll = function findAllCharacters(query, cb) {
    findAll("series", query, cb);
};

exports.find = function findCharacter(id, cb) {
    find("series", id, cb);
};
