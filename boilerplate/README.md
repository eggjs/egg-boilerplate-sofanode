# {{name}}

{{description}}

## 快速入门

<!-- 在此次添加使用文档 -->

如需进一步了解，参见 [egg 文档][egg]。

### 本地开发

```bash
$ npm i
$ npm run proxy
$ npm run dev
$ open http://localhost:7001/
```

### 本地单元测试

- [egg-bin] 内置了 [mocha], [thunk-mocha], [power-assert], [istanbul] 等框架，让你可以专注于写单元测试，无需理会配套工具。
- 断言库非常推荐使用 [power-assert]。
- 具体参见 [egg 文档 - 单元测试](https://eggjs.org/zh-cn/core/unittest)。

```bash
$ npm i
$ npm run proxy
$ npm run test
```

### 部署
> node 技术栈部署规则参看 https://github.com/alipay/antcloud-node-stack#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6

```bash
// 打包 tgz
$ npm bulid

```
- 部署到金融云 https://tech.antfin.com/docs/2/46706

### 内置指令

- 使用 `npm run lint` 来做代码风格检查。
- 使用 `npm run test` 来执行单元测试。
- 使用 `npm run proxy` 根据 proxy 配置生成 proxy 访问代理文件
- 使用 `npm run autod` 来自动检测依赖更新，详细参见 [autod](https://www.npmjs.com/package/autod) 。


[egg]: https://eggjs.org
