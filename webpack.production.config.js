var webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        './src/'
    ],
    output: {
        path: './dist/',
        filename: './javascripts/bundle.js'
    },
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {test: /\.jsx?$/, loader: 'babel'},
            {test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css!autoprefixer?{browsers:["last 2 version", "> 1%"]}')},
            {test: /\.less$/, loader: ExtractTextPlugin.extract('style', 'css!autoprefixer?{browsers:["last 2 version", "> 1%"]}!less')},
            {test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!autoprefixer?{browsers:["last 2 version", "> 1%"]}!sass')},
            {test: /\.(jpg|png|gif)$/, loader: 'file?name=../images/[name].[ext]'},
            {test: /\.(svg|eot|ttf|woff2?)$/, loader: 'file?name=../fonts/[name].[ext]'},
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('./javascripts/common.js'),
        new ExtractTextPlugin('./stylesheets/style.css'),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.NoErrorsPlugin()
    ]
};