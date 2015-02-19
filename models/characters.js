'use strict';
var findAll = require("./findAll");
var find = require("./find");

exports.findAll = function findAllCharacters(query, cb) {
    findAll("characters", query, cb);
};

exports.find = function findCharacter(id, cb) {
    find("characters", id, cb);
};
