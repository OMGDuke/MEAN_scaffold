var app = require('../../../server.js'),
    should = require('should'),
    mongoose = require('mongoose'),
    Sample = mongoose.model('Sample');

var sample;

describe('Sample Model', function() {
  beforeEach(function(done) {
    sample = new Sample({});
    done();
  });

  it('should have a default text value', function() {
    (sample.text).should.equal('Hello World');
  });

  afterEach(function(done) {
    Sample.remove(function() {
      done();
    });
  });
});