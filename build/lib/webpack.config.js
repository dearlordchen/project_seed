'use strict';
var webpack = require('webpack');

module.exports = {
    /*entry: {
        vendor: ['vue', 'vue-router']
    },*/
    module: {
        //加载器配置
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.js$/,
            loader: 'babel',
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
            js: 'babel'
        }
    },
    eslint: {
        formatter: require('eslint-friendly-formatter')
    },
    plugins: [

    ],
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.js']
    },
    externals: {
        // require("jquery") is external and available
        //  on the global var jQuery
        "jquery": "jQuery",
        "vue": "Vue",
        "vue-router": "VueRouter"
    }
};