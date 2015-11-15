var webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack/hot/dev-server',
        './src/'
    ],
    output: {
        publicPath: '/static/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js']
    },
    devServer: {
        contentBase: './src',
        historyApiFallback: true,
        port: 3000,
        hot: true,
        progress: true
    },
    module: {
        loaders: [
            {test: /\.jsx?$/, loader: 'babel'},
            {test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css')},
            {test: /\.less$/, loader: ExtractTextPlugin.extract('style', 'css!less')},
            {test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!sass')},
            {test: /\.(jpg|png|gif)$/, loader: 'file?name=[name].[ext]'},
            {test: /\.(svg|ttf|eot|woff2?)$/, loader: 'file?name=[name].[ext]'},
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common.js'),
        new ExtractTextPlugin('style.css'),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};