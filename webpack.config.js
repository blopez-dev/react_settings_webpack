const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const htmlPlugin = new HtmlWebpackPlugin({
  template: './src/index.html',
});

const isDevelopment = process.env.NODE_ENV === 'development';

console.log(isDevelopment)

const output = !isDevelopment
  ? { clean: true, filename: 'index.js', publicPath: '/', libraryTarget: 'commonjs2' }
  : { clean: true, };

module.exports = {
  target: 'node',
  mode: process.env.NODE_ENV,
  entry: './src/index.js',
  output,
  module: {
    rules: [
      {
        test: /\.js$/i,
        use: "babel-loader",
      },
      {
        test: /\.jpeg$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: !isDevelopment ? [new Dotenv()] : [
    htmlPlugin,
    new Dotenv(),
  ],
  externals: {
    react: 'react',
    'styled-components': 'styled-components',
  },
}
