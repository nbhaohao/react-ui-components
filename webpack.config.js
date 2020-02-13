const path = require("path");

module.exports = {
  entry: {
    index: "./lib/index.tsx"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    library: "reactUI",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        loader: "svg-sprite-loader"
      },
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
        options: {
          useBabel: true,
          babelOptions: {
            babelrc: false /* Important line */,
            plugins: [
              [
                "@babel/plugin-transform-runtime",
                {
                  corejs: 3
                }
              ]
            ]
          },
          babelCore: "@babel/core"
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  }
};
