var expect = require('chai').expect;
const supertest = require('supertest'); 
const app = require('../../server'); 

describe('User Login Integration test:', function() {
    describe('Check if we can sign in:', function() {
      // eslint-disable-next-line max-len
      it('Normal Sign in', function(done) {
        let newUser = {"email":"simplesignin@gmail.com",
                       "password":"Example"};
        supertest(app)
          .post('/api/user/signin')
          .send(newUser)
          .end(function(err, res) {
            expect(res.statusCode).to.equal(200);
          });
          done();
      });

      it('Wrong email', function(done) {
        let newUser = {"email":"wrong@gmail.com",
                       "password":"Example"};

        supertest(app)
          .post('/api/user/signin')
          .send(newUser)
          .end(function(err, res) {
            expect(res.statusCode).to.equal(401);
            expect(res.text).to.be.equal('{"errors":[{"msg":"Invalid Credentials"}]}'); 
          });
          done();  
      });

      it('Wrong password', function(done) {
        let newUser = {"email":"simplesignin@gmail.com",
                       "password":"Wrongpassword"};

        supertest(app)
            .post('/api/user/signin')
            .send(newUser)
            .end(function(err, res) {
              expect(res.statusCode).to.equal(401);
              expect(res.text).to.be.equal('{"errors":[{"msg":"Invalid Credentials"}]}'); 
            }); 
            done();
        });
    });
  });
  
  