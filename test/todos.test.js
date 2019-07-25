'use strict';

var app = require('../server');
var chai = require('chai');
var request = require('supertest');

var expect = chai.expect;

describe('API Tests', function() {
  var task = {
    name: 'integration test',
  };

  describe('## Create task ', function() {
    it.only('should create a task', function(done) {
      request(app)
        .post('/tasks')
        .send(task)
        .end(function(err, res) {
          expect(res.statusCode).to.equal(200);
          expect(res.body.name).to.equal('integration test');
          task = res.body;
          done();
        });
    });
  });

  describe('# Get all tasks', function() {
    it('should get all tasks', function(done) {
      request(app)
        .get('/tasks')
        .end(function(err, res) {
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.be.an('array');
          done();
        });
    });
  });
});