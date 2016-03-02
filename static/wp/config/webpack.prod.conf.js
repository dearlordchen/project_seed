var webpack = require('webpack')
var config = require('./webpack.base.conf')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var prodConfig = Object.assign({}, config)

// naming output files with hashes for better caching.
// dist/index.html will be auto-generated with correct URLs.
prodConfig.output.filename = '[name].[hash:8].js'
prodConfig.output.chunkFilename = '[id].[hash:8].js'

// whether to generate source map for production files.
// disabling this can speed up the build.
var SOURCE_MAP = true

prodConfig.devtool = SOURCE_MAP ? 'source-map' : false

// generate loader string to be used with extract text plugin
function generateExtractLoaders (loaders) {
  return loaders.map(function (loader) {
    return loader + '-loader' + (SOURCE_MAP ? '?sourceMap' : '')
  }).join('!')
}

prodConfig.vue.loaders = {
  // js: 'babel!eslint',
  js: 'babel',
  // http://vuejs.github.io/vue-loader/configurations/extract-css.html
  css: ExtractTextPlugin.extract('vue-style-loader', generateExtractLoaders(['css'])),
  less: ExtractTextPlugin.extract('vue-style-loader', generateExtractLoaders(['css', 'less'])),
  sass: ExtractTextPlugin.extract('vue-style-loader', generateExtractLoaders(['css', 'sass'])),
  stylus: ExtractTextPlugin.extract('vue-style-loader', generateExtractLoaders(['css', 'stylus']))
}

prodConfig.plugins = (prodConfig.plugins || []).concat([
  // http://vuejs.github.io/vue-loader/workflow/production.html
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }),
  // new webpack.optimize.CommonsChunkPlugin({
  //   name: 'vendor',
  //   // filename: "vendor.js"
  //   // (Give the chunk a different name)
  //   minChunks: Infinity
  //   // (with more entries, this ensures that no other module
  //   //  goes into the vendor chunk)
  // }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),
  new webpack.optimize.OccurenceOrderPlugin(),
  // extract css into its own file
  new ExtractTextPlugin('[name].[contenthash].css'),
  // generate dist index.html with correct asset hash for caching.
  // you can customize output by editing /build/index.template.html
  // see https://github.com/ampedandwired/html-webpack-plugin
  // new HtmlWebpackPlugin({
  //   filename: '../index.html',
  //   template: 'src/index.html',
  //   chunks: ['app', 'vendor']
  // })
])

module.exports = prodConfig
