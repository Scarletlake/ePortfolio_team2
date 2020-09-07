var expect = require('chai').expect;
const supertest = require('supertest'); 
const app = require('../../server'); 


describe('User Login', function() {
    describe('Check if we can sign in:', function() {
      
      it('Normal Sign in', async function() {
        let newUser = {"email":"simplesignin@gmail.com",
                       "password":"Example"};
        const res = await supertest(app)
                            .post('/api/user/signin')
                            .send(newUser);
        expect(res.statusCode).to.equal(200);
      });

      it('Wrong email', async function() {
        let newUser = {"email":"wrong@gmail.com",
                       "password":"Example"};

        const res = await supertest(app)
                            .post('/api/user/signin')
                            .send(newUser);
        expect(res.statusCode).to.equal(400);
        expect(res.text).to.be.equal('{"errors":[{"msg":"Invalid Credentials"}]}');   
      });

      it('Wrong password', async function() {
        let newUser = {"email":"simplesignin@gmail.com",
                       "password":"Wrongpassword"};

        const res = await supertest(app)
                            .post('/api/user/signin')
                            .send(newUser);
        expect(res.statusCode).to.equal(400);
        expect(res.text).to.be.equal('{"errors":[{"msg":"Invalid Credentials"}]}');   
      });

    });
  });
  
  