/*
 * @Author: Rikka
 * @Date: 2022-11-11 09:51:31
 * @LastEditTime: 2022-12-06 17:08:03
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\project\nightclub\vue.config.js
 */
const { defineConfig } = require("@vue/cli-service");
const { WebpackConfig, nightclub_config } = require("@stark/jarvis");

const webpack_config = new WebpackConfig(nightclub_config, "http://localhost", __dirname);

module.exports = defineConfig({
  css: webpack_config.getCssOptions(),
  transpileDependencies: true,
  devServer: webpack_config.get_dev_server(),
  publicPath: webpack_config.get_public_path(),
  chainWebpack: webpack_config.get_chain_config,
  configureWebpack: {
    devServer: {
      historyApiFallback: true
    },
    optimization: {
      usedExports: true,
      splitChunks: false
    },
    plugins: [...webpack_config.get_plugins(), webpack_config.get_remote_mf_plugin({})]
  }
});
