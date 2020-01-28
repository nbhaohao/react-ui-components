const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./lib/index.tsx"
  },
  output: {
    path: path.resolve(__dirname, "dist/lib"),
    library: "reactUI",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "React UI",
      template: "./index.html"
    })
  ]
};
