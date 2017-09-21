'use strict';

const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/pages/home/app.js'
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].bundle.js',
        publicPath: '/static'
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, 'src')
        },
        modules: ['node_modules', 'components']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react']
                    }
                }],
                exclude: '/node_modules/'
            },
             {
                test: /\.css$/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                })
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                use: 'url-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextWebpackPlugin({
            filename: 'style.css'
        }),
        new HtmlWebpackPlugin({
            filename: path.join(__dirname, 'src/pages/home/index.html'),
            template: path.join(__dirname, 'src/pages/home/template.html'),
            inject: 'body'
        })
    ]
}
