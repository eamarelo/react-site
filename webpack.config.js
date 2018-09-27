const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const Fiber = require('fibers');

const devMode = process.env.NODE_ENV !== 'production'

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
})

const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: '[name].css',
  chunkFilename: '[id].css'
})

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
            {loader :'babel-loader'},
            {loader :'eslint-loader',
              options: {
                failOnError: true,
              }
            }
          ]
      },

      {
        test: /\.(sc|sa|c)ss$/,
        use: [
          // fallback to style-loader in development
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  output: {
    publicPath: '/'
  },
  plugins: [
    htmlWebpackPlugin,
    miniCssExtractPlugin
  ]

}
