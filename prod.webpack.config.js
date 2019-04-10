const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const outputDirectory = 'dist/client';

module.exports = {
  mode: 'production',
  entry: './src/client/index.js',
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: 'client.js',
    libraryTarget: 'var',
    library: 'mylib'
  },
  resolve: {
    modules: ['node_modules'],
    alias: {
      'TweenLite': 'gsap/src/uncompressed/TweenLite.js',
      'TweenMax': 'gsap/src/uncompressed/TweenMax.js',
      'TimelineLite': 'gsap/src/uncompressed/TimelineLite.js',
      'TimelineMax': 'gsap/src/uncompressed/TimelineMax.js',
      'ScrollMagic': 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js',
      'animation.gsap': 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js',
      'debug.addIndicators': 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
        loader: 'url-loader?limit=5000000'
      }
    ]
  },
  devServer: {
    port: 3000,
    open: true,
    proxy: {
      '/api': 'http://localhost:8080'
    }
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
    ignored: /node_modules/
  },
  plugins: [
    new CleanWebpackPlugin([outputDirectory]),
    new HtmlWebpackPlugin({
      template: './src/client/indexTemplate.html',
      favicon: './src/client/favicon.ico',
      inject: 'head'
    })
  ]
};
