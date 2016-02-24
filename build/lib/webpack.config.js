'use strict';
var webpack = require('webpack');

module.exports = {
    /*entry: {
        vendor: ['vue', 'vue-router']
    },*/
    module: {
        resolve: {
            extensions: ['', '.js', '.jsx']
        },
        //加载器配置
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.js$/,
            loader: 'babel!eslint',
            exclude: /node_modules/
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.less$/,
            loader: 'css!less'
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'url',
            query: {
                limit: 10000,
                name: '[name].[ext]?[hash]'
            }
        }]
    },
    vue: {
        loaders: {
            js: 'babel!eslint'
        }
    },
    eslint: {
        formatter: require('eslint-friendly-formatter')
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            // filename: "vendor.js"
            // (Give the chunk a different name)
            minChunks: Infinity
                // (with more entries, this ensures that no other module
                //  goes into the vendor chunk)
        })
    ],
    devtool: 'source-map'
};