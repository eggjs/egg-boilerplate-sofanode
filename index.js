'use strict';

module.exports = {
  name: {
    desc: '项目名称',
  },
  description: {
    desc: '项目描述',
    default: '',
  },
  author: {
    desc: '项目作者',
    default: '',
  },
  antvip: {
    desc: '区域的唯一标识，每个区域一个地址，应用通过 AntVIP 寻找所在区域环境的地址',
    default: '',
  },
  instanceId: {
    desc: '环境的唯一标识，不同的环境实例标识不一样，应用通过实例标识连接所在环境的服务端',
    default: '',
  },
  accessKey: {
    desc: '访问共享中间配置的key',
    default: '',
  },
  accessSecret: {
    desc: '访问共享中间件配置的秘钥',
    default: '',
  }
};
