/**********************************************************
 * Author : nanyuantingfeng
 * Timestamp : 2016-02-01 13:13
 **********************************************************/

var toml = require('toml');
var tomlifer = require('tomlifer');

module.exports.parse = toml.parse;
module.exports.stringify = tomlifer.stringify;
module.exports.encode = toml.parse;
module.exports.decode = tomlifer.stringify;