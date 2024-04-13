require('dotenv').config();
const path = require('path');
const webpack = require("webpack");

module.exports = {
    mode: process.env.MODE,
    entry: './client/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'client.bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            }
        ]
    },
    devServer: {
        hot: true, // Включаем горячую перезагрузку
        static: path.resolve(__dirname, 'src'), // Директория, где находятся статические файлы
        port: 3001, // Порт dev server
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};
