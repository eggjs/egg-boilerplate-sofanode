'use strict';
const path = require('path');

module.exports = {
  async: true,
  directoryToJar: path.join(__dirname, '../libs'),
  services: [{
    eggFramework: 'sofa-node',
    appName: '{{name}}',
    api: {
      sampleService: {
        interfaceName: 'com.alipay.sofa.rpc.test.facade.SampleService',
        group: 'SOFA',
        tpl: path.join(__dirname, 'proxy.js.tpl'),
      },
    },
    dependency: {
      groupId: 'com.alipay.sofa.rpc.test',
      artifactId: 'sofarpc-facade',
      version: '1.0.0',
    },
  }],
};
