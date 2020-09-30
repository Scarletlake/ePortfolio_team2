var expect = require('chai').expect;
const supertest = require('supertest'); 
const app = require('../../server'); 


describe('User Register Integration test:', function() {
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
            expect(res.statusCode).to.equal(409);
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

      it('Invalid Email Registration test (Without suffix)', function(done) {
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

      it('Invalid Email Registration test (Invalid username)', function(done) {
        let newUser = {"email":"compa&tible@gmail.com",
                       "password":"Example"};
        supertest(app)
          .post('/api/user/signup')
          .send(newUser)
          .end(function(err, res) {
            expect(res.statusCode).to.equal(400);
            expect(res.text).to.be.equal('{"errors":[{"value":"compa&tible@gmail.com","msg":"Please include a valid email","param":"email","location":"body"}]}');   
          });

          done();
        
      });

      it('Invalid Email Registration test (Double @)', function(done) {
        let newUser = {"email":"invalidemail@@gmail.com",
                       "password":"Example"};
        supertest(app)
          .post('/api/user/signup')
          .send(newUser)
          .end(function(err, res) {
            expect(res.statusCode).to.equal(400);
            expect(res.text).to.be.equal('{"errors":[{"value":"invalidemail@@gmail.com","msg":"Please include a valid email","param":"email","location":"body"}]}');   
          });
        
          done();
          
      });


      it('Invalid Email Registration test (Start with dot)', function(done) {
        let newUser = {"email":".invalidemail@gmail.com",
                       "password":"Example"};
        supertest(app)
          .post('/api/user/signup')
          .send(newUser)
          .end(function(err, res) {
            expect(res.statusCode).to.equal(400);
            expect(res.text).to.be.equal('{"errors":[{"value":".invalidemail@gmail.com","msg":"Please include a valid email","param":"email","location":"body"}]}');   
          });
        
          done();
          
      });

      it('Invalid Email Registration test (Finish with dot)', function(done) {
        let newUser = {"email":"invalidemail.@gmail.com",
                       "password":"Example"};
        supertest(app)
          .post('/api/user/signup')
          .send(newUser)
          .end(function(err, res) {
            expect(res.statusCode).to.equal(400);
            expect(res.text).to.be.equal('{"errors":[{"value":"invalidemail.@gmail.com","msg":"Please include a valid email","param":"email","location":"body"}]}');   
          });
        
          done();
          
      });

      it('Incompatible password test (Below 6 digits)', function(done) {
        let newUser = {"email":"compatible@gmail.com",
                       "password":"12345"};
        supertest(app)
          .post('/api/user/signup')
          .send(newUser)
          .end(function(err, res) {
            expect(res.statusCode).to.equal(400);
            expect(res.text).to.be.equal('{"errors":[{"value":"12345","msg":"Please enter a password between 6 to 16 characters","param":"password","location":"body"}]}');     
          });

          done();
        
      });

      it('Incompatible password test (Above 16 digits)', function(done) {
        let newUser = {"email":"compatible@gmail.com",
                       "password":"12345678910111213"};
        supertest(app)
          .post('/api/user/signup')
          .send(newUser)
          .end(function(err, res) {
            expect(res.statusCode).to.equal(400);
            expect(res.text).to.be.equal('{"errors":[{"value":"12345678910111213","msg":"Please enter a password between 6 to 16 characters","param":"password","location":"body"}]}');     
          });

          done();
        
      });
    });
  });
  