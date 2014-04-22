'use strict';

var assert    = require('assert');
var co        = require('co');
var couchbase = require('../');


var db = new couchbase.Connection({ bucket: 'default' }, co(function *(err) {
  if (err) {
    throw err;
  }

  try {
    // NOTE: You must supply the option even if it's empty.
    yield db.setMulti({
      'doc_1': {
        value: 'Document 1'
      },
      'doc_2': {
        value: 'Document 2'
      },
      'doc_3': {
        value: 'Document 3'
      }
    }, {});

    // NOTE: You must supply the option even if it's empty.
    var results = yield db.getMulti(['doc_1', 'doc_2', 'doc_3'], {});
    console.log(results);
  } catch (e) {
    console.error('DB error occurred:', e.message);
  }

  process.exit(0);
}));
