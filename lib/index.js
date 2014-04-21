'use strict';

var conn      = require('couchbase/lib/connection');
var viewQuery = require('couchbase/lib/viewQuery');
var thunkify  = require('thunkify');

var util = require('./util');


function thunkifyObj(target) {
  for (var prop in target.prototype) {
    if (!target.hasOwnProperty(prop) && util.methodQualified(prop, target.prototype[prop])) {
      target.prototype[prop] = thunkify(target.prototype[prop]);
    }
  }
}

thunkifyObj(conn);
thunkifyObj(viewQuery);

module.exports = require('couchbase');
