const app = require('../server');
const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;

describe('Todos list API Integration Tests', function() {
    describe('#GET / tasks', function() {
        it('should get all tasks', function(done) {
            request(app).get('/tasks').end(function(err,res) {
                expect(res.statusCode).to.equal(200);
                expect(res.body).to.be.an('array');
                expect(res.body).to.be.empty;
                done();
            });
        });
    });
});
