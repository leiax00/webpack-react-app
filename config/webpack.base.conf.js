const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const path = require('path');
const resolvePath = (_path) => path.resolve(__dirname, _path);


const baseConfig = {
  entry: resolvePath('../src/index.jsx'),
  output: {
    filename: 'bundle-[name].js',
    path: resolvePath('../dist'), // 输出的文件地址
    publicPath: ''
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': resolvePath('../src')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolvePath('../public/index.html'),
      filename: "index.html",
      title: "Webpack React App"
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash:4].css'
    }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      }, {
        test: /(\.scss|\.sass)$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      }, {
        test: /\.(jsx|js|ts|tsx)$/i,
        use: 'babel-loader'
      }, {
        test: /\.svg$/i,
        type: 'asset/resource'
      },

    ]
  }
}

module.exports = {
  resolvePath,
  baseConfig
}
