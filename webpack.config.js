const webpack = require('webpack');
const dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

require('dotenv').config();
const api_key = process.env.GOOGLE_API_KEY;

console.log(api_key);

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  node: {
    fs: 'empty'
  },
  module: {
    rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
        },
        {
          test: /\.(png|jp(e*)g|svg)$/,  
          use: [{
              loader: 'url-loader',
              options: { 
                  limit: 8000,
                  name: 'images/[hash]-[name].[ext]'
              } 
          }]
        }
      ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new dotenv(),
    new HtmlWebpackPlugin({
      inject: false,
      template: './index.html',

      apiUrl: `https://maps.googleapis.com/maps/api/js?key=${api_key}`,

    })
  ],
  mode: "none",
};