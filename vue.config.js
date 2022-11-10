const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // useEslint: false,

  chainWebpack: (config) => {
    config.module.rules.delete("eslint");
    config.module.rules.delete("prettier");
  },
});
