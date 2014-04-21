`co-couchbase` is a [`couchbase`](https://github.com/couchbase/couchnode) wrapper to be used with [visionmedia's `co`](https://github.com/visionmedia/co) library.

In order to use `co` and `co-couchbase`, you need to have `node` version `0.11.x` and you must use `--harmony-generators` flag when running node.

## Installation
NOTE: `co-couchbase` doesn't work with `node 0.11.11 and 0.11.12` (maybe there's a problem with node-gyp?). It's only tested with `node 0.11.10`.
```
$ node --version
v0.11.10
$ npm install co
$ npm install co-couchbase
```

## Usage
test.js:
```
var co        = require('co');
var couchbase = require('co-couchbase');

var db = new couchbase.Connection({ bucket: "default" }, co(function *(err) {
  yield db.set('test_doc', 'co-couchdb');
  var result = yield db.get('test_doc');
  console.log(result.value);  // logs 'co-couchdb'
  process.exit(0);
}));
```
Then, run it:
```
$ node --harmony test.js
```

## Examples
See `examples/` directory.
