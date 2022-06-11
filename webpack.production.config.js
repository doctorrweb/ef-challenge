const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './public/dist'),
        filename: 'main.[contenthash].js',
        publicPath: './'
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            { 
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ],
            },
            {
                test: /\.less$/i,
                // include: [/node_modules\/.*antd/],
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    // { loader: "style-loader" },
                    { loader: 'css-loader' },
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions : {
                                modifyVars: {
                                    'primary-color': '#009E38',
                                    'background-color-light': 'hsv(0, 0, 93%)',
                                    "border-radius-base": "2px",
                                },
                                javascriptEnabled: true,
                            },
                        },
                    },
                ],
            },
            { 
                test: /\.(svg|eot|woff|ttf|svg|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            // output: 'fonts/'
                        }
                    }
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img/'
                        }
                    }
                ]
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.[contenthash].css'
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            // favicon: './public/dist/favicon.ico',
            template: './template.html',
            cache: true
        }),
        new Dotenv({ path: './.env' }),
    ],
    resolve: {
        extensions: ["*", ".js", ".jsx", '.ts', '.tsx', ".css", ".json"],
    },
    stats: {
        colors: true,
        children: true,
        errorDetails: true,
    },
    devtool: 'source-map',
}