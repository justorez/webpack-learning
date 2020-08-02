const webpack = require('webpack');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');

module.exports = merge(baseConfig, {
    mode: 'development',
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    watchOptions: {
        ignored: /node_modules/
    },
    devServer: {
        contentBase: './dist',
        hot: true,
        stats: 'errors-only'
    },
    devtool: '#source-map'
});
