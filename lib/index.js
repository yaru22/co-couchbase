'use strict';

var conn      = require('couchbase/lib/connection');
var debug     = require('debug')('co-couchbase');
var viewQuery = require('couchbase/lib/viewQuery');
var thunkify  = require('thunkify');

var util = require('./util');


function thunkifyObj(target) {
  for (var prop in target.prototype) {
    if (!target.hasOwnProperty(prop) && util.methodQualified(prop, target.prototype[prop])) {
      debug('thunkified "%s"', prop);
      target.prototype[prop] = thunkify(target.prototype[prop]);
    }
  }
}

thunkifyObj(conn);
thunkifyObj(viewQuery);

module.exports = require('couchbase');
