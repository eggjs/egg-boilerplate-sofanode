'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const ctx = this.ctx;
    if (ctx.query.name) {
      this.ctx.body = 'hello ' + await this.ctx.proxy.sampleService.say(ctx.query.name);
    } else {
      this.ctx.body = 'hello ' + await this.ctx.proxy.sampleService.message();
    }
  }
}

module.exports = HomeController;
