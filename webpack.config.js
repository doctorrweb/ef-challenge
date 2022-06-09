const path = require('path')
const Dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, "./src/index.js"),
    output: {
        path: path.resolve(__dirname, './public/dist'),
        filename: 'main.js',
        publicPath: './',
        crossOriginLoading: "anonymous"
    },
    mode: 'development',
    stats: {
        children: true,
        errorDetails: true,
    },
    devServer: {
        static: { directory: path.join(__dirname, 'public/dist'), },
        compress: true,
        // Enable hot reloading
        hot: 'only',
        port: 9000,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/],
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.less$/i,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    {
                        loader: "less-loader",
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
                        loader: "file-loader",
                        options: {
                            name: "[path][name].[ext]",
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            // favicon: './src/images/favicon.ico',
            template: './template.html'
        }),
        new Dotenv({ path: './.env' })
    ],
    devtool: 'source-map',
    resolve: {
        extensions: ["*", ".js", ".jsx", '.ts', '.tsx', ".css", ".json"]
    }
}