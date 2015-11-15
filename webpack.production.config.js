var webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        './src/'
    ],
    output: {
        path: './dist/',
        filename: './scripts/bundle.js'
    },
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {test: /\.jsx?$/, loader: 'babel'},
            {test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css')},
            {test: /\.less$/, loader: ExtractTextPlugin.extract('style', 'css!less')},
            {test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!sass')},
            {test: /\.(jpg|png|gif)$/, loader: 'file?name=./images/[name].[ext]'},
            {test: /\.(svg|eot|ttf|woff2?)$/, loader: 'file?name=./fonts/[name].[ext]'},
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('./scripts/common.js'),
        new ExtractTextPlugin('./stylesheets/style.css'),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.NoErrorsPlugin()
    ]
};