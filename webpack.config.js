var path = require("path");
var { CleanWebpackPlugin } = require('clean-webpack-plugin');
var HTMLWebpackPlugin = require("html-webpack-plugin");
var CopyPlugin = require("copy-webpack-plugin");

// PostCss
//var autoprefixer = require('autoprefixer');
var postcssVars = require('postcss-simple-vars');
var postcssImport = require('postcss-import');

module.exports = {
    mode: "development",
    devtool: 'source-map',
    entry: {
        "index": './src/pages/index.jsx'
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: "fui.dev.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        importLoaders: 1,
                        //localIdentName: '[name]_[local]_[hash:base64:5]'
                    }
                }, {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: function () {
                                return [
                                    postcssImport,
                                    postcssVars,
                                    //autoprefixer
                                ];
                            }
                        },
                    },
                }]
            },
            {
                test: /\.jsx?$/, 
                loader: "babel-loader",
                exclude: /node_modules\/(^three)/,
                options: {
                    presets: ["@babel/preset-react"]
                }
            },
            {
                test: /\.(svg|png|wav|mp3|gif|jpg|jpeg|mp4|avi)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'static/assets/'
                }
            }
        ]
    },
    devServer: {
        port: 80,
        static: [
            path.join(__dirname, 'static')
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: './template.html',
            filename: "index.html",
            chunks: ['index']
        }),
        /*
        new HTMLWebpackPlugin({
            template: './template.html', // 主页HTML模板
            filename: 'user.html', // 输出的HTML文件名
            chunks: ['home'] // 指定这个HTML文件需要引入的chunk（这里是home页面的bundle）
        }),*/
        new CopyPlugin({
            patterns: [
                { from: "static", to: "static" }
            ],
        })
    ]
}