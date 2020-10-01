var expect = require('chai').expect;
const supertest = require('supertest'); 
const app = require('../../server'); 

describe('User Profile Integration test:', function() {
    describe('Check if we can operate profile:', function() {
      // eslint-disable-next-line max-len
      it('Profile get test', function(done) {
        let newUser = {"email":"simplesignin@gmail.com",
                       "password":"Example"};
        supertest(app)
          .get('/api/user/Profile')
          .set('Cookie', 'Authorization=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWY1MzNmOWVhOWY5Y2YzYzYwOWEyMjg4In0sImlhdCI6MTYwMTM3OTc4MywiZXhwIjoxNjExNzQ3NzgzfQ.tpSQ0SjlJEZWXkm8o58zl0tj1RcN5l-6Bungm4OaVnY')
          .send(newUser)
          .end(function(err, res) {
            expect(res.statusCode).to.equal(200);
            done();
          });
      });

      it('Get deleted user\'s profile test', function(done) {
        let newUser = {"email":"simplesignin@gmail.com",
                       "password":"Example"};
        supertest(app)
          .get('/api/user/Profile')
          .set('Cookie', 'Authorization=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWY3MzFmYjE3YWU1ZGU1ZmQ4ZWI2Njk2In0sImlhdCI6MTYwMTM4MDI3MywiZXhwIjoxNjAxMzgzODczfQ.Vp9NOnwzHpxVVufy2NwPqRbVj3Me5LyEsC8C5hS5hw8')
          .send(newUser)
          .end(function(err, res) {
            expect(res.statusCode).to.equal(401);
            expect(res.text).to.be.equal('{"msg":"Authentication failed"}');
            done();
          });
      });

      it('Profile update test', function(done) {
        let newUser = {"email":"simplesignin@gmail.com",
                       "password":"Example",
                       "gender":"female"};
        supertest(app)
          .post('/api/user/Profile')
          .set('Cookie', 'Authorization=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWY1MzNmOWVhOWY5Y2YzYzYwOWEyMjg4In0sImlhdCI6MTYwMTM3OTc4MywiZXhwIjoxNjExNzQ3NzgzfQ.tpSQ0SjlJEZWXkm8o58zl0tj1RcN5l-6Bungm4OaVnY')
          .send(newUser)
          .end(function(err, res) {
            expect(res.statusCode).to.equal(200);
            expect(res.text).to.be.equal('{"message":"Update successful!"}');
            done();
          });
      });

      it('Get Profile\'s Portfolios test', function(done) {
        let newUser = {"email":"simplesignin@gmail.com",
                       "password":"Example"};
        supertest(app)
          .get('/api/user/portfolio')
          .set('Cookie', 'Authorization=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWY1MzNmOWVhOWY5Y2YzYzYwOWEyMjg4In0sImlhdCI6MTYwMTM3OTc4MywiZXhwIjoxNjExNzQ3NzgzfQ.tpSQ0SjlJEZWXkm8o58zl0tj1RcN5l-6Bungm4OaVnY')
          .send(newUser)
          .end(function(err, res) {
            expect(res.statusCode).to.equal(200);
            done();
          });
      });
    });
  });
  