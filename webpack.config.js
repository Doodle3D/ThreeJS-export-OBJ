const path = require('path');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HTMLWebpackPlugin = require('html-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';

const babelLoader = {
  loader: 'babel-loader',
  options: {
    presets: [
      require('babel-preset-env')
    ],
    babelrc: false
  }
};

module.exports = {
  entry: './example/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules:  [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: babelLoader
      }, { // make THREE global available to three.js examples
        test: /three\/examples\/.+\.js/,
        use: 'imports-loader?THREE=three'
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Doodle3D - ThreeJS OBJ Exporter',
      template: require('html-webpack-template'),
      inject: false,
      appMountId: 'app'
    }),
  ],
  devtool: "source-map",
  devServer: {
    contentBase: 'dist'
  }
};
