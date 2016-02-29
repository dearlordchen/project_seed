var path = require('path')

module.exports = {
  entry: {},
  output: {
    path: path.resolve(__dirname, '../dist/'),
    publicPath: 'https://st.midea.com/wp/dist' // 静态文件地址
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    alias: {
      'src': path.resolve(__dirname, '../src')
    }
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        // loader: 'babel!eslint',
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  vue: {
    loaders: {
      // js: 'babel!eslint'
      js: 'babel'
    }
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },
  externals: {
    'jquery': "jQuery"
  }
}
