'use strict';

const mock = require('egg-mock');

describe('test/app/controller/home.test.js', () => {

  let app;
  before(() => {
    app = mock.app();
    return app.ready();
  });

  it('should GET /', async () => {
    /*
    app.mockProxy('sampleService', 'say', arg => {
      return arg;
    });
    */

    await app.httpRequest()
      .get('/')
      .expect('hello SOFANode')
      .expect(200);
  });
});
