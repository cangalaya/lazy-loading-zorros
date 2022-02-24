const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js'
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,                    // fonts de extensión woff https://google-webfonts-helper.herokuapp.com/fonts/
        type: "asset/resource",
        generator: {
            filename: "assets/fonts/[hash][ext]",
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|svg)$/i,           
        type: 'asset/resource',
        generator: {
          filename: "assets/images/[hash][ext]",
        }
      },
      {
        test: /\.svg$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new CopyPlugin({                    // copy plugins -  carpetas o directorios OPCIONAL -- 
          patterns: [
            {
              from: path.resolve(__dirname, "src", "assets/images/303322.svg"),      // copiamos alguna carpeta en especifico
              to: "assets/images"                           // generamos una carpeta assets images en el dist/
            }
          ],
        }),
    new HtmlWebpackPlugin({ 
      inject: 'body',   
      template: './public/index.html',   
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin()
  ]
};

module.exports = config;