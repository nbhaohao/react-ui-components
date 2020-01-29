const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");

const webpackBaseConfig = require("./webpack.config");

module.exports = merge(webpackBaseConfig, {
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      title: "React UI",
      template: "./index.html"
    })
  ]
});
