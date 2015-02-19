'use strict';
var findAll = require("./findAll");
var find = require("./find");

exports.findAll = function findAllComics(query, cb) {
    findAll("comics", query, cb);
};

exports.find = function findComic(id, cb) {
   find("comics", id, cb);
};
