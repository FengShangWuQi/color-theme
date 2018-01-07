const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const paths = require('./paths');
const cssFilename = 'static/css/[name].[contenthash:8].css';

const plugins = [
  new HtmlWebpackPlugin({
    inject: true,
    template: paths.demoHtml,
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      removeEmptyAttributes: true,
      removeStyleLinkTypeAttributes: true,
      keepClosingSlash: true,
      minifyJS: true,
      minifyCSS: true,
      minifyURLs: true,
    },
  }),
  new ExtractTextPlugin({
    filename: cssFilename,
  }),
  new StyleLintPlugin({
    configFile: paths.appStylelint,
    files: `${paths.demoSrc}/**/*.css`,
  }),
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"production"',
  }),
];

const config = {
  entry: {
    app: path.join(paths.demoSrc, 'app'),
  },
  output: {
    path: paths.demoDist,
    filename: 'assets/js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins,
};

module.exports = config;
