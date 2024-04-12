require('dotenv').config();
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: process.env.MODE,
    target: 'node',
    entry: './server/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.bundle.js',
        publicPath: '/',
    },
    externals: [nodeExternals(), "react-helmet"],
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
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};
