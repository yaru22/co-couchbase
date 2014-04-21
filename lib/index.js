'use strict';

var couchbase = require('couchbase');
var thunkify  = require('thunkify');


var conn = couchbase.Connection;
for (var prop in conn.prototype) {
  if (!conn.hasOwnProperty(prop)) {
    var funcStr = conn.prototype[prop].toString();
    // Thunkify methods which do not start with '_' (i.e. private methods) and
    // have 'callback' as last parameter.
    if (/^[^_]/.test(prop) &&
        /function.*\(.*,?.*callback\)/.test(funcStr)) {
      conn.prototype[prop] = thunkify(conn.prototype[prop]);
    }
  }
}

module.exports = couchbase;
