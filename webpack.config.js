const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WatchLiveReloadPlugin = require('webpack-watch-livereload-plugin');
const webpack = require('webpack');

module.exports = {
    entry: "./js/main.js",
    output: {
        path: __dirname + '/js',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{loader: 'css-loader', options: {minimize: true}}, 'sass-loader'],
                }),
            },
            {
                test: /\.html$/,
                loader: 'mustache-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("../css/styles.css"),
        new WatchLiveReloadPlugin({
            files: [
                './**/*.html',
                './**/*.scss',
                './js/*.js',
            ]
        }),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        })
    ]
};
