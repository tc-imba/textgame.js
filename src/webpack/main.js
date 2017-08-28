const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


let config = {
    entry: {
        'main': path.resolve(__dirname, '../../game/game.js'),
        //'textgame': path.resolve(__dirname, '../../src/textgame.js'),
    },
    output: {
        path: path.resolve(__dirname, '../../build'),
        filename: 'js/[name].js',
        publicPath: 'build/'
    },
    module: require('./module'),
    plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: path.resolve(__dirname, '../../build/vendor.stable.manifest.json'),
        }),
        new webpack.ProvidePlugin({
            regeneratorRuntime: 'regenerator-runtime'
        }),
        new ExtractTextPlugin("css/main.css"),
    ]
};

module.exports = config;