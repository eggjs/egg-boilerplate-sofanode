'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  app.get('/', app.controller.home.index);
  app.get('/healthy', async ctx => {
    ctx.body = 'healthy';
  });
};
