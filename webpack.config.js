const path = require('path');
const isDev = process.env.NODE_ENV === 'development';
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
        new HTMLWebpackPlugin({ // подключает в html все необходимые скрипты
            title: 'virtual-keyboard', // создает титул для html документа
            template: './index.html', // указывает путь к нашему html файлу чтобы перенести его содержимое
  
        }),
            new CleanWebpackPlugin(), // добавление плагина очищения хэша
            new MiniCssExtractPlugin({
                filename: '[name].bundle.css'  // параметры такие как в Output
            })
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