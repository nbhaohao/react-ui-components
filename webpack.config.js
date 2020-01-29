const path = require("path");

module.exports = {
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
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
};
