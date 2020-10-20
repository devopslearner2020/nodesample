var request = require('supertest');
var app = require('./../../app.js');

describe('app js test', function() {
  describe('GET /', function() {
    it('should respond to GET with root path', function(done) {
      request(app)
        .get('')
        .expect(200)
        .end(done);
    });
  });

  describe('GET 404', function() {
    it('should respond to 404', function(done) {
      request(app)
        .get('/root')
        .expect(404)
        .end(done);
    });
  });
});
