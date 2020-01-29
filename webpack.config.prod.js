const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const webpackBaseConfig = require("./webpack.config");

module.exports = merge(webpackBaseConfig, {
  mode: "production",
  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "react-dom",
      root: "ReactDOM"
    }
  },
  plugins: [new CleanWebpackPlugin()]
});
