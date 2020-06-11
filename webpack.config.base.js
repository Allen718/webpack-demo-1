
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: '方方',
            // filename: 'test.html',  //应该是改在dist里面这个新生成的网页的名字
            template: 'src/assets/test.html'
        }),

    ],
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [

                    'style-loader',

                    'css-loader',

                    'sass-loader',
                ],
            },

            {
                test: /\.less$/,
                use: [

                    'style-loader',

                    'css-loader',

                    'less-loader',
                ],

            },
            {
                test: /\.styl$/i,
                use: [

                    'style-loader',

                    'css-loader',

                    'stylus-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
        ],
    },
}





