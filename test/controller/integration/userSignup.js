var expect = require('chai').expect;
const supertest = require('supertest'); 
const app = require('../../../server'); 


describe('User Register', function() {
    describe('Check if we can sign up:', function() {
      // eslint-disable-next-line max-len
      it('Normal Registration test', function(done) {
        let newUser = {"email":"simplesignup@gmail.com",
                       "password":"Example"};
        supertest(app)
          .post('/api/user/signup')
          .send(newUser)
          .end(function(err, res) {
            expect(res.statusCode).to.equal(200);
          });

        supertest(app)
          .delete('/api/user/delete')
          .send(newUser)
          .end(function(err, res) {
            expect(res.statusCode).to.equal(200);
            expect(res.text).to.be.equal('{"message":"user deleted"}');
          });

        done();
      });

      it('Duplicate registration detection', function(done) {
        let newUser = {"email":"dupulicate@gmail.com",
                       "password":"Example"};
        
        supertest(app)
          .post('/api/user/signup')
          .send(newUser)
          .end(function(err, res) {
            expect(res.statusCode).to.equal(200);
          });


        supertest(app)
          .post('/api/user/signup')
          .send(newUser)
          .end(function(err, res) {
            expect(res.statusCode).to.equal(400);
            expect(res.text).to.be.equal('{"errors":[{"msg":"User already exists"}]}');  
          });

        supertest(app)
          .delete('/api/user/delete')
          .send(newUser)
          .end(function(err, res) {
            expect(res.statusCode).to.equal(200);
            expect(res.text).to.be.equal('{"message":"user deleted"}');
          });
          
          done();
                
      });

      it('Invalid Email Registration test', function(done) {
        let newUser = {"email":"invalidemail",
                       "password":"Example"};
        supertest(app)
          .post('/api/user/signup')
          .send(newUser)
          .end(function(err, res) {
            expect(res.statusCode).to.equal(400);
            expect(res.text).to.be.equal('{"errors":[{"value":"invalidemail","msg":"Please include a valid email","param":"email","location":"body"}]}');   
          });
        
          done();
          
      });

      it('Incompatible password test', function(done) {
        let newUser = {"email":"compatible@gmail.com",
                       "password":"12345"};
        supertest(app)
          .post('/api/user/signup')
          .send(newUser)
          .end(function(err, res) {
            expect(res.statusCode).to.equal(400);
            expect(res.text).to.be.equal('{"errors":[{"value":"12345","msg":"Please enter a password with 6 or more characters","param":"password","location":"body"}]}');     
          });
        
          done();
        
      });
      
    });
  });
  