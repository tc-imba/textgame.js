const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let config = {
    entry: {
        'main': path.resolve(__dirname, '../../game/game.js'),
    },
    output: {
        path: path.resolve(__dirname, '../../build'),
        filename: 'js/[name].js',
        publicPath: 'build/'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: 'babel-loader'
        }, {
            test: /bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/,
            use: 'imports-loader?jQuery=jquery'
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
        }, {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader']
        }, {
            test: /\.(png|jpg|cur|gif)$/,
            use: 'url-loader?limit=25000&name=imgs/[name].[hash:6].[ext]'
        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use: "url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[hash:6].[ext]"
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use: "file-loader?name=fonts/[name].[hash:6].[ext]"
        }]
    },
    plugins: [

    ]
};

module.exports = config;