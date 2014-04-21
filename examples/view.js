// This example requires `beer-sample` populated on your Couchbase node.
// If you don't have it populated, go to:
// Couchbase Admin Console -> Settings -> Sample Buckets
// and enable `beer-sample`

'use strict';

var co        = require('co');
var couchbase = require('../');


var db = new couchbase.Connection({ bucket: 'beer-sample' }, co(function *(err) {
  if (err) {
    throw err;
  }

  var query = db.view('beer', 'brewery_beers');
  var results = yield query.query({ limit: 10 });
  console.log(JSON.stringify(results, null, 2));
}));
