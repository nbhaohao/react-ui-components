/*
 * 导入 icons 文件夹下面的所有文件
 * 但是会没有 tree shaking 的功能
 * https://stackoverflow.com/questions/48990197/webpack-how-to-bundle-require-all-files-of-a-folder-subfolder#48995047
 * https://webpack.js.org/guides/dependency-management/#context-module-api
 * */
let importAll = requireContext => requireContext.keys().forEach(requireContext);

try {
  importAll(require.context("../../../../icons/", true, /\.svg$/));
} catch (error) {}
