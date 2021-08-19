const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        environment: {
            arrowFunction: false,
            const: false
        }
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {

                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    "@babel/preset-env",
                                    {
                                        targets: {
                                            "chrome": "58",
                                            "ie": "11"
                                        },
                                        "corejs": "3",
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'
                ],
                exclude: /node-modules/
            }
        ]
    },

    plugins: [

        new CleanWebpackPlugin(),

        new HtmlWebpackPlugin({
            // title: '这是一个自定义的title'
            template: "./src/index.html"
        })
    ],
    resolve: {
        extensions: ['.ts', '.js']
    }
}