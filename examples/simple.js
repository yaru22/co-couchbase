'use strict';

var assert    = require('assert');
var co        = require('co');
var couchbase = require('../');


var db = new couchbase.Connection({ bucket: 'default' }, co(function *(err) {
  if (err) {
    throw err;
  }

  try {
    var key = 'testdoc';
    var value = 'co-couchbase';

    yield db.set(key, value);
    console.log('Successfully `set` a document with key "%s" with value "%s".', key, value);

    var result = yield db.get(key);
    assert(result.value === value);
    console.log('Successfully `get` a document with key "%s" with value "%s".', key, result.value);
  } catch (e) {
    console.error('DB error occurred!', e);
  }

  process.exit(0);
}));
