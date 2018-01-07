const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const publicPath = '/';
const paths = require('./paths');

const hostname = process.env.HOST || 'localhost';
const port = process.env.PORT || 8000;

const plugins = [
  new HtmlWebpackPlugin({
    inject: true,
    template: paths.demoHtml,
  }),
  new OpenBrowserPlugin({ url: `http://${hostname}:${port}` }),
  new StyleLintPlugin({
    configFile: paths.appStylelint,
    files: `${paths.demoSrc}/**/*.css`,
  }),
  new webpack.HotModuleReplacementPlugin(),
  new CaseSensitivePathsPlugin(),
];

const config = {
  devtool: 'cheap-module-source-map',
  entry: {
    app: path.join(paths.demoSrc, 'app'),
  },
  output: {
    path: paths.demoDist,
    pathinfo: true,
    filename: 'static/js/bundle.js',
    chunkFilename: 'static/js/[name].chunk.js',
    publicPath: publicPath,
    devtoolModuleFilenameTemplate: info =>
      path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
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
        use: [
          require.resolve('style-loader'),
          { loader: require.resolve('css-loader') },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins,
  devServer: {
    contentBase: paths.demoDist,
    compress: true,
    port,
  },
};

module.exports = config;
