var expect = require('chai').expect;
const supertest = require('supertest'); 
const app = require('../../server'); 

describe('User Portfolio Integration test:', function() {
    var aPortfolio;
    describe('Check if we can operate portfolio:', function() {
      // eslint-disable-next-line max-len
      it('Portfolio get test', function(done) {
        supertest(app)
          .get('/api/portfolio/5f9cde8e7f13ea8cfcdbb524')
          .send()
          .end(function(err, res) {
            expect(res.statusCode).to.equal(200);
            done();
          });
      });


      it('Portfolio create test', function(done) {
        let newPortfolio = {
            "portfolioName": "test",
            "template": "art",
            "userName": "null null",
            "homePage": { "tag": "Home",
                          "profilePhoto": "link to img",
                          "description": "Hi" },
            "formalPage": { "tag": "About",
                            "titile": "About Me"},
            "leisurePage": { "tag": "Leisure",
                             "titile": "Free Time" },
            "contactPage": { "tag": "Contact",
                             "title": "Contact Me", 
                             "email": "simplesignin@gmail.com",
                             "phone": null}
          };
       
        supertest(app)
          .post('/api/portfolio/new')
          .set('Cookie', 'Authorization=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWY1MzNmOWVhOWY5Y2YzYzYwOWEyMjg4In0sImlhdCI6MTYwMTM3OTc4MywiZXhwIjoxNjExNzQ3NzgzfQ.tpSQ0SjlJEZWXkm8o58zl0tj1RcN5l-6Bungm4OaVnY')
          .send(newPortfolio)
          .end(function(err, res) {
            expect(res.statusCode).to.equal(200);
            aPortfolio = res.body.id;
            done();
          });
      });

      it('Existing Portfolio update test', function(done) {
        let newPortfolio = {
          "portfolioName": "testupdate",
          "template": "art",
          "userName": "null null",
          "homePage": { "tag": "Home",
                        "profilePhoto": "link to img",
                        "description": "Hi" },
          "formalPage": { "tag": "About",
                          "titile": "About Me"},
          "leisurePage": { "tag": "Leisure",
                           "titile": "Free Time" },
          "contactPage": { "tag": "Contact",
                           "title": "Contact Me", 
                           "email": "simplesignin@gmail.com",
                           "phone": null}
          };
       
        supertest(app)
          .post("/api/portfolio/"+aPortfolio)
          .set('Cookie', 'Authorization=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWY1MzNmOWVhOWY5Y2YzYzYwOWEyMjg4In0sImlhdCI6MTYwMTM3OTc4MywiZXhwIjoxNjExNzQ3NzgzfQ.tpSQ0SjlJEZWXkm8o58zl0tj1RcN5l-6Bungm4OaVnY')
          .send(newPortfolio)
          .end(function(err, res) {
            expect(res.statusCode).to.equal(200);
            done();
          });
      });

      it('Nonexistent Portfolio update test', function(done) {
        let newPortfolio = {
            "portfolioName": "testUpdate",
            "template": "art",
            "userName": "null null",
            "homePage": { "tag": "Home",
                          "profilePhoto": "link to img",
                          "description": "Hi" },
            "formalPage": { "tag": "About",
                            "titile": "About Me",
                            "sections": [] },
            "leisurePage": { "tag": "Leisure",
                             "titile": "Free Time",
                             "sections": [] },
            "contactPage": { "tag": "Contact",
                             "title": "Contact Me", 
                             "email": "simplesignin@gmail.com",
                             "phone": null}
          };
       
        supertest(app)
          .post("/api/portfolio/"+"123456123456")
          .set('Cookie', 'Authorization=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWY1MzNmOWVhOWY5Y2YzYzYwOWEyMjg4In0sImlhdCI6MTYwMTM3OTc4MywiZXhwIjoxNjExNzQ3NzgzfQ.tpSQ0SjlJEZWXkm8o58zl0tj1RcN5l-6Bungm4OaVnY')
          .send(newPortfolio)
          .end(function(err, res) {
            expect(res.statusCode).to.equal(500);
            expect(res.text).to.be.equal('{"message":"Portfolio Not Found"}');
            done();
          });
      });

      it('Portfolio delete test', function(done) {
        supertest(app)
          .delete("/api/portfolio/"+aPortfolio)
          .set('Cookie', 'Authorization=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWY1MzNmOWVhOWY5Y2YzYzYwOWEyMjg4In0sImlhdCI6MTYwMTM3OTc4MywiZXhwIjoxNjExNzQ3NzgzfQ.tpSQ0SjlJEZWXkm8o58zl0tj1RcN5l-6Bungm4OaVnY')
          .send()
          .end(function(err, res) {
            expect(res.statusCode).to.equal(200);
            expect(res.text).to.be.equal('{"message":"portfolio deleted"}');
            done();
          });
      });
    });
  });
  