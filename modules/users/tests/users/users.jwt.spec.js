'use strict';

module.exports = {
  only: false,
  testFn: function (app) {
    var request = require('supertest');
    var chalk = require('chalk');
    var test = require('../../../core/lib/test');
    var path = require('path');
    var config = require(path.resolve('./config/config'));

    var message = 'testing jwt';

    test.start(message);

    request(app)
      .post('/auth/jwt')
      .set({
        'Authorization': 'JWT ' + config.jwt.testToken
      })
      .end(function (err, res) {
        if (err){ 
          test.fail(message, err);
        } else {
          test.pass(message);
          console.log(res.body);
        }
      });
  }
};
