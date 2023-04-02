const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;


// enabling the chai testing library to conduct api testing with chaihttp

chai.use(chaiHttp)

describe('when hitting the 6500 port',()=>{ //test suite
    it('should return status of 200',(done)=>{  //test spec
        chai.request('http://localhost:6500')
        .get('/')
        .then((res)=>{
             expect(res).to.have.status(200)
             done();
        }).catch((err)=>{
            throw err
        })
    })

    it('should return movie details when /movies route is provided',(done)=>{  //test spec
        chai.request('http://localhost:6500')
        .get('/movies')
        .then((res)=>{
             expect(res).to.have.status(200)
             done();
        }).catch((err)=>{
            throw err
        })
    })

    it('should return movie details when /movies route is provided',(done)=>{  //test spec
        chai.request('http://localhost:6500')
        .get('/movies')
        .then((res)=>{
             expect(res.body).to.be.an('array')
             done();
        }).catch((err)=>{
            throw err
        })
    })
})