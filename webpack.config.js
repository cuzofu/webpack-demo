const path = require('path');

// 自动生成index.html
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 自动删除dist目录
// const CleanWebpackPlugin = require('clean-webpack-plugin');

const webpack = require('webpack');

module.exports = function(env) {
  return require('./webpack.${env}.js')
}

module.exports = {
  entry: {
    // index: './src/index.js',
    app: './src/index.js',
    print: './src/print.js'
  },
  // Using source maps;
  // If an error originates from a.js,
  // the source map will tell you exactly that.
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    // new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
    // 无法实现 始终报错
    // new webpack.optimize.UglifyJsPlugin({
    //   sourceMap: devtool && (devtool.indexOf("sourcemap") >= 0 || devtool.indexOf("source-map") >= 0)
    // })
  ],
  output: {
    // filename: 'bundle.js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      }
    ]
  }
};
