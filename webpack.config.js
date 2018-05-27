const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: './src/app.js',
  output: {
    path:  path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    }, {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              minimize: {
                safe: true
              }
            }
          },
          {
            loader: "postcss-loader",
            options: {
              autoprefixer: {
                browsers: ["last 2 versions"]
              },
              plugins: () => [
                autoprefixer
              ]
            },
          },
          {
            loader: "sass-loader",
            options: {}
          }
        ]
      }]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 8081,
    host: '127.0.0.1'
  }
};