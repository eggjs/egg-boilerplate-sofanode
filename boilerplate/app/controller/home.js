'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    // this.ctx.body = 'hello ' + await this.ctx.proxy.sampleService.say(ctx.query.name);
    this.ctx.body = 'hello ' + (this.ctx.query.name || 'SOFANode');
  }
}

module.exports = HomeController;
