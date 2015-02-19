var md5 = require("crypto").createHash('md5');
const privatekey = process.env.MARVEL_API_KEY;
var dateString = exports.dateString = parseInt(Date.now() / 1000, 10);
var publicKey = exports.publicKey = "93b547948dc1a72e4b3c3977c6777421";
var hash = exports.hash = md5.update(dateString + privatekey + publicKey).digest("hex");

exports.queryString = `ts=${dateString}&apikey=${publicKey}&hash=${hash}`;
