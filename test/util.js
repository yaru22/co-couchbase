'use strict';

var chai = require('chai');
var util = require('../lib/util');


chai.should();

describe('util', function () {
  describe('#methodQualified()', function () {
    it('should return true for qualified methods', function (done) {
      util.methodQualified('funcName', function (a, callback) {}).should.be.true;
      util.methodQualified('funcName', function (a, b, callback) {}).should.be.true;
      util.methodQualified('funcName', function (callback) {}).should.be.true;
      util.methodQualified('funcName', function(a, callback) {}).should.be.true;
      util.methodQualified('funcName', function(a, b, callback) {}).should.be.true;
      util.methodQualified('funcName', function(callback) {}).should.be.true;
      done();
    });

    it('should return false for private methods', function (done) {
      util.methodQualified('_funcName', function () {}).should.be.false;
      util.methodQualified('__funcName', function () {}).should.be.false;
      util.methodQualified('_', function () {}).should.be.false;
      done();
    });

    it('should return false for methods that do not have callback parameter', function (done) {
      util.methodQualified('funcName', function () {}).should.be.false;
      util.methodQualified('funcName', function (a) {}).should.be.false;
      util.methodQualified('funcName', function (b) {}).should.be.false;
      util.methodQualified('funcName', function (a, callback, hello) {}).should.be.false;
      done();
    });
  });
});
