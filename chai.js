// chai provides various assertion mechanism hence developers use this module

// TDD- test driven development assertion patttern seen  in angular based jasmine testing libraries
// assertion style


// const assert = require("chai").assert;

// const userIds = [11,23,33,44,55,66,88]

// assert.isArray(userIds,"is not an  array ")
// assert.include(userIds,23, "user id is not present")
// assert.lengthOf(userIds,7, "length of array of user ids should  be 7")


// BDD behaviour driven development mocha
// expect style

// const expect = require("chai").expect;

// const userIds = [11,23,33,44,55,66,88]

// expect(userIds).to.be.an('array').that.includes(23);
// expect(userIds).to.be.an('array').to.have.lengthOf(7)


// should syle -BDD


const should  =  require("chai").should

const userIds = [11,23,33,44,55,66];

should(userIds).to.be.an('array').that.includes(13);
should(userIds).to.be.an('array').to.have.lengthOf(7)