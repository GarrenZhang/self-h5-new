const path = require("path")
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  chainWebpack: config => {
    const oneOfsMap = config.module.rule("scss").oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use("sass-resources-loader")
        .loader("sass-resources-loader")
        .options({
          resources: ["./src/styles/mixins.scss", "./src/styles/var.scss"]
        })
        .end()
    });
    config.plugin("html").tap(args => {
      args[0].title = "上海金润二当家供应链管理有限公司"
      return [...args]
    });
  }
}
