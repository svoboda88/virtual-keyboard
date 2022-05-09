const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} =require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, './script.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        assetModuleFilename: '[name].bundle.png'
    },
    resolve: {
        extensions: ['.js', '.json', '.png']

    },
    devServer: {
        allowedHosts: 'all',
        hot: true
    },
    plugins: [ 
        new HTMLWebpackPlugin({ 
            title: 'virtual-keyboard',
            template: './index.html',
  
        }),
            new CleanWebpackPlugin(), 
            new MiniCssExtractPlugin({
                filename: '[name].bundle.css'  
            }),        
    ],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          },
        ]
      }
}