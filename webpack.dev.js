const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    static: path.resolve(__dirname, "src"),
    compress: true,
    historyApiFallback: true,
    port: 3000,
  },
});
