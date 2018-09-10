import webpack from 'webpack';
import { resolve } from 'path';

const hotReloadModules = [
  'react-hot-loader/patch',
  'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000'
];

export default {
  mode: 'development',
  devtool: 'eval',
  entry: {
    'common': [
      'babel-polyfill',
      'isomorphic-fetch',
      ...hotReloadModules,
      resolve(__dirname, '../client/common')
    ]
  },
  target: 'web',
  output: {
    path: resolve(__dirname, 'dist'), // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: '[name].bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'] },
      { test: /(\.css)$/, use: ['style-loader', 'css-loader', 'postcss-loader'] }
    ]
  }
};
