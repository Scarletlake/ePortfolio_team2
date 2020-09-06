var expect = require('chai').expect;
const supertest = require('supertest'); 
const app = require('../../server'); 


describe('User Register', function() {
    describe('Check if we can sign up:', function() {
      // eslint-disable-next-line max-len
      it('Registration test', async function() {
        let newUser = {"email":"simplesignup@gmail.com",
                       "password":"Example"};
        const res = await supertest(app)
                            .post('/api/user/signup')
                            .send(newUser);
        expect(res.statusCode).to.equal(200);

        const remove = await supertest(app)
                            .delete('/api/user/delete')
                            .send(newUser);
        expect(remove.statusCode).to.equal(200);
        expect(remove.text).to.be.equal('{"message":"user deleted"}');


      });

      it('Duplicate registration detection', async function() {
        let newUser = {"email":"dupulicate@gmail.com",
                       "password":"Example"};
        
        var res = await supertest(app)
                          .post('/api/user/signup')
                          .send(newUser);
        expect(res.statusCode).to.equal(200);

        res = await supertest(app)
                    .post('/api/user/signup')
                    .send(newUser);
        expect(res.statusCode).to.equal(400);
        expect(res.text).to.be.equal('{"errors":[{"msg":"User already exists"}]}');   

        const remove = await supertest(app)
                            .delete('/api/user/delete')
                            .send(newUser);
        expect(remove.statusCode).to.equal(200);
        expect(remove.text).to.be.equal('{"message":"user deleted"}');
                
      });
    });
  });
  