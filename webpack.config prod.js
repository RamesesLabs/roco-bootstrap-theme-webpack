const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const path = require('path');


module.exports = {
    module.exports = {
        entry: './src/app.js',
        output: {
            path: path.resolve(__dirname, 'build')        
        }
      };
    resolve: {
        extensions: ['', '.js', '.jsx', '.es6'],
        modulesDirectories: ['./node_modules']
    },
    plugins: [
        new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          filename: '[name].css',
          chunkFilename: '[id].css',
        }),
      ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                       'style-loader',
                       'css-loader',
                       'sass-loader'
                    ]
                }
            ]   
        },
    
    };