const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");


module.exports = {
  entry: "./src/index.js", 
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "build"),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'swc-loader',
          options: {}
        }
      },
      {
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                ident: "postcss",
                plugins: [tailwindcss, autoprefixer]
              }
            }
          }
        ],
        test: /\.(css)$/i
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: "file-loader"
      },
      {
        test: /\.geojson$/,
        type: "json"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".tsx", ".ts"],
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@pages": path.resolve(__dirname, "src/pages/"),
      "@assets": path.resolve(__dirname, "src/assets/"),
      "@config": path.resolve(__dirname, "src/configs/"),
      "@hooks": path.resolve(__dirname, "src/hooks/"),
      "@modal": path.resolve(__dirname, "src/modals/"),
      "@views": path.resolve(__dirname, "src/views/"),
      "@layout": path.resolve(__dirname, "src/layout/"),
      "@api": path.resolve(__dirname, "src/api/"),
      "@utils": path.resolve(__dirname, "src/utils/"),
      "@contexts": path.resolve(__dirname, "src/contexts/"),
      "@styles": path.resolve(__dirname, "src/styles/"),
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html")
    }),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env)
    })
  ]
};

