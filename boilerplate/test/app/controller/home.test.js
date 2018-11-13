'use strict';

const mock = require('egg-mock');

describe('test/app/controller/home.test.js', () => {

  let app;
  before(() => {
    app = mock.app();
    return app.ready();
  });

  it('should GET /', async () => {
    app.mockProxy('sampleService', 'say', arg => {
      return arg;
    });

    app.mockProxy('sampleService', 'message', () => {
      return 'message sofa node';
    });

    await app.httpRequest()
      .get('/')
      .expect('hello message sofa node')
      .expect(200);

    await app.httpRequest()
      .get('/?name=sofa-node')
      .expect('hello sofa-node')
      .expect(200);
  });
});
