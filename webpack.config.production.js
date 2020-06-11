
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
const base = require('./webpack.config.base.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    ...base,
    mode: 'production',

    // devServer: {
    //     contentBase: './dist',
    // },
    plugins: [
        ...base.plugins,

        new MiniCssExtractPlugin({

            filename: '[name].[contenthash].css',
            chunkFilename: '[id].css',
        })
    ],
    module: {

        rules: [
            ...base.module.rules,
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                        },
                    },
                    'css-loader',
                ]
            }
        ]
    },

    // module: {
    //     rules: [
    //         {
    //             test: /\.css$/i,
    //             use: ['style-loader', 'css-loader'],
    //         },
    //     ],
    // },
}





